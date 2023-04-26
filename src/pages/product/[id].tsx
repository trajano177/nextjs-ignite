import { useRouter } from 'next/router'

export default function Products() {
  // Query vem de dentro do useRouter
  const { query } = useRouter()
  return (
    <h1>protudos:{JSON.stringify(query)}</h1>
  )
}