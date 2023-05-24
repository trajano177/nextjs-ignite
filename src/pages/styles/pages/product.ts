import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'strech',
    gap: '4rem',
    maxWidth: 1180,
    margin: '0 auto',

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    height: 656,
    padding: ' 0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }

})

export const ProductDetails = styled('main', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300'
    },

    span: {
        marginTop: '1rem',
        display: 'flex',
        fontSize: '$2xl',
        color: '$green300'
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300'
    },

    button: {
        marginTop: 'auto',
        broder: 0,
        borderRadius: 8,
        backgroundColor: '$green500',
        fontWeight: 'bold',
        color: 'white',
        padding: '1.25rem',
        cursor: 'pointer',
        fontSize: '$md',
         '&:hover': {
            backgroundColor: '$green300'
        }

    },
})