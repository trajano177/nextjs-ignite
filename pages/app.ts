import { styled } from "../src/pages/styles";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto'
})