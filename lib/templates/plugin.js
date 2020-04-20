const stripePlugin = (ctx, inject) => {
  if (typeof window !== 'undefined' && window.Stripe) {
    const stripe = window.Stripe('<%= options.publishableKey %>')
    inject('stripe', stripe)
    ctx.$stripe = stripe
  } else {
    throw new Error('Could not find Stripe.js')
  }
}

export default stripePlugin
