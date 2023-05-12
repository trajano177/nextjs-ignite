import Stripe from "stripe";
import { env } from "../envaironments/ApiKeys";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
   apiVersion: '2022-11-15',
   appInfo: {
      name: 'Ignite Shop'
   }
})