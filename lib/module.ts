import path from 'path'
import { Module } from '@nuxt/types'

declare global {
  interface Window {
    Stripe: stripe.StripeStatic
  }
}

interface Options {
  publishableKey: string
  defer?: boolean
  async?: boolean
  version?: string
}

const stripeModule: Module<Options> = function(moduleOptions: Options) {
  const defaults: Options = {
    publishableKey: '',
    defer: true,
    async: true,
    version: 'v3'
  }

  const options: Options = Object.assign(
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
