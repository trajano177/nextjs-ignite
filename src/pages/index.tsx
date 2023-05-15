import { HomeConatiner, Product } from "./styles/pages/home"
import Image from "next/image";
import camiseta1 from "../pages/assets/camisetas/1.png";
import camiseta2 from "../pages/assets/camisetas/2.png"
import camiseta3 from "../pages/assets/camisetas/3.png";

import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next";
import { stripe } from "../pages/lib/stripe"
import Stripe from "stripe";
import Products from './product/[id]';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: number;
  }
}


export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeConatiner ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
      <Product key={product.id} className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="#" />

        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      </Product>
        )
      })}

    </HomeConatiner>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: price.unit_amount,
    }
  })
  return {
    props: {
      products
    }
  }
},