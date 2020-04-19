import { Plugin } from '@nuxt/types'
import Vue from 'vue'

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

const stripePlugin: Plugin = (ctx, inject) => {
  if (typeof window !== 'undefined' && window.Stripe) {
    if (!Vue.prototype.$stripe) {
      const stripe = window.Stripe('<%= options.publishableKey %>')
      inject('stripe', stripe)
      ctx.$stripe = stripe
    }
  } else {
    throw new Error('Could not find Stripe.js')
  }
}

export default stripePlugin
