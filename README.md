# Nuxt.js Stripe Module

> A Nuxt.js module for Stripe.js

## Table of Contents ##

* [Description](#description)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)

## Install

```bash
$ yarn add nuxtjs-stripe // or npm install --save nuxtjs-stripe
```

## Getting Started

Add `nuxtjs-stripe` to `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    // Simple usage
    'nuxtjs-stripe',

    // With options
    ['nuxtjs-stripe', {
      /* module options */
      version: 'v3', // Default
      publishableKey: 'STRIPE_PK'
    }],
 ]
}
```

or even

```js
{
  modules: [
    'nuxt-stripe-module',
  ],
  stripe: {
    version: 'v3',
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY'
  },
}
```

## Usage

You can use this module to inject in your application a `$stripe` object, by setting the publishableKey instead of calling `window.Stripe(PUBLISHABLE_KEY)` every time. Then you can use it in your application like:

```js
{
  ...
  mounted() {
    const elements = this.$stripe.import().elements();
    const card = elements.create('card');
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');
  },
  ...
}
```

See Stripe documentation: https://stripe.com/docs/stripe-js/reference

## License

[MIT License](./LICENSE)