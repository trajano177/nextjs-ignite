import { AppProps } from "next/app"
import { globalStyles } from "./styles/global"
import logoImg from "./assets/logo.svg"
import { Container, Header } from "./styles/pages/app";
import Image from "next/image";


globalStyles();
export default function App({ Component, pageProps }: AppProps) {


  return (
    <Container>
      <Header>
        <h1>dd</h1>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}


