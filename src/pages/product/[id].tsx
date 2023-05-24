import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../styles/pages/product'

export default function Products() {
  // Query vem de dentro do useRouter
  const { query } = useRouter()
  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>camixa x</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatum deserunt harum ea laudantium a culpa aut quia illo, animi esse quos cupiditate voluptatem, dolore dolorem deleniti repudiandae. Cum, totam?</p>
       <button>Compre agora </button>
      </ProductDetails>

    </ProductContainer>
  )
}