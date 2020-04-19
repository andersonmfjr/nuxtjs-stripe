import { Plugin } from '@nuxt/types'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: stripe.Stripe
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stripe: stripe.Stripe
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $stripe: stripe.Stripe
  }
}

const stripePlugin: Plugin = (_, inject) => {
  if (typeof window !== 'undefined' && window.Stripe) {
    if (!Vue.prototype.$stripe) {
      const stripe = window.Stripe('<%= options.publishableKey %>')
      inject('stripe', stripe)
    }
  } else {
    throw new Error('Could not find Stripe.js')
  }
}

export default stripePlugin
