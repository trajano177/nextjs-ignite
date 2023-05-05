import { styled } from "@stitches/react"
import { HomeConatiner, Product } from "./styles/pages/home"
import Image from "next/image"
import camiseta1 from "../assets/camisetas/1.png"
import camiseta2 from "../assets/camisetas/2.png"
import camiseta3 from "../assets/camisetas/3.png"




export default function Home() {
  return (
    <HomeConatiner>
      <Product>
        <Image src={camiseta1} alt=""/>
        <Image src={camiseta2} alt=""/>
        <Image src={camiseta3} alt=""/>
      </Product>
    </HomeConatiner>
  )
}