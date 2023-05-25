import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../styles/pages/product'
import { GetStaticProps } from 'next'
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';

interface Productprops {
  product: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
    description: string;
  }
}

export default function Products({product}: Productprops) {
  // Query vem de dentro do useRouter
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>
       <button>Compre agora </button>
      </ProductDetails>

    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;
  const unitAmount = price.unit_amount ?? 0;
 
 
  return {
    props: {
      product: {
          id: product.id,
          name: product.name,
          imageURL: product.images[0],
          price: new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(unitAmount / 100),
          description: product.description
      }
    },
    revalidade: 60*60 * 1 
  }
}