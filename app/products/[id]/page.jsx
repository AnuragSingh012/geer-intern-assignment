import { readProducts } from '@/lib/file'
import Image from 'next/image'

export async function generateStaticParams() {
  const products = await readProducts()
  return products.map((product) => ({
    id: product.id.toString()
  }))
}

export default async function ProductDetail({ params }) {
  const products = await readProducts()
  const product = products.find((p) => p.id.toString() === params.id)

  if (!product) {
    return <div className="p-6 text-center">Product not found</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-lg h-auto object-cover rounded"
      />
      <p className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</p>
    </div>
  )
}
