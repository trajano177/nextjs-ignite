import { HomeConatiner, Product } from "./styles/pages/home"
import Image from "next/image";
import camiseta1 from "../pages/assets/camisetas/1.png";
import camiseta2 from "../pages/assets/camisetas/2.png"
import camiseta3 from "../pages/assets/camisetas/3.png";




export default function Home() {
  return (
    <HomeConatiner>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="#"/>
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt="#"/>
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta3} width={520} height={480} alt="#"/>
        
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      
    </HomeConatiner>
  )
}