import { AppProps } from "next/app"
import { globalStyles } from "./styles/global"
import { Container, Header } from "../../pages/app";
import logoImg from "../assets/logo.svg"
import Image from "next/image";
import StyledJsxRegistry from "../lib/registry";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledJsxRegistry>
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
    </StyledJsxRegistry>
  )
}


