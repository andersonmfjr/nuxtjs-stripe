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

Add it to the types of your `tsconfig.json`:

```json
{
  "types": [
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

See Stripe documentation: https://stripe.com/docs/stripe-js/reference

## License

[MIT License](./LICENSE)