import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
<<<<<<< HEAD
import { urls } from "@/src/envaironments/apikeys";
=======
>>>>>>> e3419a7c85a5cf9a816275d93e25c0f3abf47be4

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {priceId} = req.body;
  
<<<<<<< HEAD
  
  if (req.method !== 'POST') {
    return res.status(405)
  }
  if (!priceId) {
    return res.status(400).json({ error: 'Products not found' })
  }


  const success_url =`${urls.NEXT_URL}/success`;
  const cancel_url =`${urls.NEXT_URL}/`;
  console.log(success_url);
  
=======
  if (req.method === 'POST') {
    return res.status(405).json({error: 'Price not allowed'})
  }

  if (!priceId) {
    return res.status(400).json({error: 'Price not Found'})
  }
>>>>>>> e3419a7c85a5cf9a816275d93e25c0f3abf47be4

  
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

  console.log(handler)

  return res.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}