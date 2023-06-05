import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { urls } from "@/src/envaironments/apikeys";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {priceId} = req.body;
  
  
  if (req.method !== 'POST') {
    return res.status(405)
  }
  if (!priceId) {
    return res.status(400).json({ error: 'Products not found' })
  }


  const success_url =`${urls.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url =`${urls.NEXT_URL}/`;
  console.log(success_url);
  

  
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: success_url ,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}