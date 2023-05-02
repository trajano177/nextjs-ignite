import { styled } from "@stitches/react"


const Button = styled('button', {
  backgroundCollor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },
  '&:hover': {
    filter: 'brightness(0)'
  },
})

export default function Home() {
  return (
    <Button>
      <span>Tester</span>
    </Button>
  )
}