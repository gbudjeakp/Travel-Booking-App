const { Stripe } = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SK);

const createStripeCustomer = async ({ email }) => {
  const { data } = await stripe.customers.list({ email });
  return data.length === 0 ? stripe.customers.create({ email }) : data[0];
};

module.exports = { createStripeCustomer };
