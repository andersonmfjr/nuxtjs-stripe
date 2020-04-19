import { Plugin } from '@nuxt/types'
import Vue from 'vue'

declare module '@nuxt/types' {
  interface Context {
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
