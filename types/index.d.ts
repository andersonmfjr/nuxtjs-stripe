import Vue from 'vue'

declare global {
  interface Window {
    Stripe: stripe.StripeStatic
  }
}

declare module '@nuxt/types' {
  interface Context {
    $stripe: stripe.Stripe
  }
  interface NuxtAppOptions {
    $stripe: stripe.Stripe
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: stripe.Stripe
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $stripe: stripe.Stripe
  }
}