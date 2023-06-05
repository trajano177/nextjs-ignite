import Link from "next/link";
import {ImageConatiner, SuccessConatiner } from "./styles/pages/success";

export default function Success() {
  return (
    <SuccessConatiner>
      <h1>Compra efetuada com sucesso!</h1>
    <ImageConatiner>

    </ImageConatiner>
    <p>Uhuul <strong>Diego Fernandes</strong>, sua <strong> Camiseta Beyond the Limits</strong> já está a caminho da sua casa. </p>

    <Link href={"/"}>Voltar ao catálogo!</Link>

    </SuccessConatiner>
  )
}