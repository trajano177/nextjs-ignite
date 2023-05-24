import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'strech',
    gap: '4rem',
    maxWidth: '1100',
    margin: '0 auto',

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: '576',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    height: 'clac()',
    padding:' 0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }

})

export const ProductDetails = styled('main', {

})