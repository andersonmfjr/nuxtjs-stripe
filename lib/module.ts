import path from 'path'
import { Module } from '@nuxt/types'

declare global {
  interface Window {
    Stripe: stripe.StripeStatic
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: stripe.Stripe
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stripe: stripe.Stripe
  }

  interface Context {
    $stripe: stripe.Stripe
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $stripe: stripe.Stripe
  }
}

export interface StripeModuleOptions {
  publishableKey: string
  defer?: boolean
  async?: boolean
  version?: string
}

const stripeModule: Module<StripeModuleOptions> = function(moduleOptions: StripeModuleOptions) {
  const defaults: StripeModuleOptions = {
    publishableKey: '',
    defer: true,
    async: true,
    version: 'v3'
  }

  const options: StripeModuleOptions = Object.assign(
    {},
    defaults,
    this.options.stripe,
    moduleOptions
  )

  if (
    typeof options?.publishableKey !== 'string' ||
    !options?.publishableKey.length
  ) {
    throw new Error('Please add the Stripe.js publishable key!')
  }

  this.options.head!.script!.push({
    src: `//js.stripe.com/${options.version}/`,
    async: options.async,
    defer: options.defer
  })

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

export const meta = require('../package.json');

export default stripeModule
