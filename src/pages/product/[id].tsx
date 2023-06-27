import { ImageContainer, ProductContainer, ProductDetails } from '../../../pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe';
import { stripe } from '../../lib/stripe';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
interface Productprops {
  product: {
    id: string;
    name: string;
    imageURL: string;
    price: string;
    description: string;
    defaultPriceId: string;
  }
}

export default function Products({product}: Productprops) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  async function handlePrice () {
   try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const {checkoutUrl} = response.data;
  
      window.location.href = checkoutUrl
   } catch(err) {
    setIsCreatingCheckoutSession(false)
    //conectar com alguma ferramenta de observabilidade Datadog / Sentry
    alert('Falha ao redirecionar ao checkout')
   }
  }
  console.log(handlePrice);
  
  

  // Query vem de dentro do useRouter
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageURL} width={520} height={480} alt=""/>
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>
       <button disabled={isCreatingCheckoutSession} onClick={handlePrice}>Compre agora </button>
      </ProductDetails>

    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Obtenha os IDs dos produtos do seu banco de dados ou de qualquer fonte de dados
  const productIds = ["prod_Nrd9SyQDs3GqQh"];

  const paths = productIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params}) => {
  const productId = params?.id || '';
  
  
  if (!productId) {
    return {
      notFound: true,
    };
  }
 
  

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;
  const unitAmount = price.unit_amount ?? 0;
  console.log(product)
 
 
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
          description: product.description,
          defaultPriceId: price.id,
      }
    },
    revalidate: 60*60 * 1 
  }
}
