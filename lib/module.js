import path from 'path'

const stripeModule = function (moduleOptions) {
  const defaults = {
    publishableKey: '',
    defer: true,
    async: true,
    version: 'v3'
  }

  const options = { ...defaults, ...this.options.stripe, ...moduleOptions }
  const pk = options.publishableKey

  if (typeof pk !== 'string' || !pk) {
    throw new Error('Please add the Stripe.js publishable key!')
  }

  this.options.head.script.push({
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
