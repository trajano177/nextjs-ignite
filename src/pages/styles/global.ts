import { globalCss } from '@stitches/react'
import { } from '.'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-font-smoothing': 'antialiased'
    },
    'body, input, textarea,button': {
        fontFamly: 'Roboto',
        fontWeight: 400,
    }
})