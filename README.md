# Nuxt.js Stripe Module

> A Nuxt.js module for Stripe.js

## Table of Contents ##

* [Install](#install)
* [Getting Started](#getting-started)
* [TypeScript Support](#typescript-support)
* [Usage](#usage)
* [License](#license)

## Install

```bash
$ yarn add nuxtjs-stripe // or npm install --save nuxtjs-stripe
```

## Getting Started

Add `nuxtjs-stripe` to `modules` section of `nuxt.config.ts`.

```js
{
  modules: [
    ['nuxtjs-stripe', {
      /* module options */
      publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
      version: 'v3', // Default
      defer: true, // Default
      async: true // Default
    }],
 ]
}
```

or even

```js
{
  modules: [
    'nuxtjs-stripe',
  ],
  stripe: {
    /* module options */
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    version: 'v3', // Default
    defer: true, // Default
    async: true // Default
  },
}
```

## TypeScript support

Add it to the `"types"` of your `tsconfig.json` after the `@nuxt/types`:

```json
{
  "types": [
    "@nuxt/types",
    "nuxtjs-stripe"
  ]
}
```

## Usage

You can use this module to inject in your application a `$stripe` object, by setting the publishableKey instead of calling `window.Stripe(PUBLISHABLE_KEY)` every time. Then you can use it in your application like:

```html
<template>
  <div id="card-element"></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      card: {} as stripe.elements.Element
    }
  },

  mounted() {
    const elements = this.$stripe.elements()
    this.card = elements.create('card')
    this.card.mount('#card-element')
  }
})
</script>
```

Other example:

```js
...
const actions: ActionTree<PaymentState, RootState> = {
  async confirmPayment({ state }) {
    try {
      const response = await this.$stripe.confirmCardPayment(state.secret, {
        payment_method: {
          card: {
            token: state.cardToken
          },
          billing_details: {
            name: state.customerName
          }
        }
      })
    } catch (error) {
      // handle error
    }
  }
}
...
```   
   
> **TIP**
>
> You can also use `$stripe` property on the nuxt [`Context`](https://nuxtjs.org/api/context). Adding `nuxtjs-stripe` to your types [(see above)](#typescript-support) will import the types from the package and make typescript aware of the additions to the `Context` interface.

See Stripe documentation for details: https://stripe.com/docs/stripe-js/reference


## License

[MIT License](./LICENSE)