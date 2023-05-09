import { useRouter } from 'next/router'

export default function Products() {
  // Query vem de dentro do useRouter
  const { query } = useRouter()
  return (
    <h1>produdos:{JSON.stringify(query)}</h1>
  )
}