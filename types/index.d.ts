import '@types/stripe-v3'

declare global {
  interface Window {
    Stripe: stripe.StripeStatic
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
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

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: stripe.Stripe
  }
}