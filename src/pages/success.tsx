import Link from "next/link";
import {ImageConatiner, SuccessConatiner } from "./styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

interface SuccessProps {
  customerName: string;
  productImages: string[]
}
export default function Success({customerName, productImages}: SuccessProps) {
  return (
    <SuccessConatiner>
      <h1>Compra efetuada com sucesso!</h1>
    <ImageConatiner>
      {productImages.map((url,i) => (
        <div key={i}>
          <Image src={url} width={120} height={110} alt="#"/>
        </div>
      ))}
    </ImageConatiner>
    <p>Uhuul <strong>{customerName}</strong>, sua <strong>{`${productImages.length} camisas`}</strong> já está a caminho da sua casa. </p>

    <Link href={"/"}>Voltar ao catálogo!</Link>

    </SuccessConatiner>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
 const sessionId = String(query.session_id);
 const session = await stripe.checkout.sessions.retrieve(sessionId, {
  expand: ['line_items', 'line_items.data.price.product']
 })

 const customerName = session.customer_details?.name;
 const productImages = session.line_items!.data.map((item) => {
  const product = item.price?.product as Stripe.Product
  return product.images[0]
 })

 return {
  props: {
    customerName,
    productImages,
  }
 }
}