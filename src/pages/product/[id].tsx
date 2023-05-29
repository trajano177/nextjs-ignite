import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Stripe from 'stripe';
import { stripe } from '../lib/stripe';
import Image from 'next/image';
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
        <Image src={product.imageURL} width={520} height={480} alt=""/>
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Obtenha os IDs dos produtos do seu banco de dados ou de qualquer fonte de dados
  const productIds = ["prod_Nrd9SyQDs3GqQh", "prod_Nrd8h8H0xMkyZ4", "prod_Nrd5cNDdOeU1pt", "prod_Nrd4tcTVXjFwlM"];

  const paths = productIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
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
    revalidate: 60*60 * 1 
  }
}