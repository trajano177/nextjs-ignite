import { HomeConatiner, Product } from "./styles/pages/home"
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from "next";
import { stripe } from "./lib/stripe"
import Stripe from "stripe";
import Link from "next/link";
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
  }[]
}


export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 48
    }
  })

  return (
    <HomeConatiner ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product

              className="keen-slider__slide">
              <Image src={product.imageURL} width={520} height={480} alt="#" />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
            <h1>kecn</h1>
          </Link>
        )
      })}

    </HomeConatiner>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    const unitAmount = price.unit_amount ?? 0;
    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(unitAmount / 100)
    }
  })
  console.log(response.data);
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2,
  }
}