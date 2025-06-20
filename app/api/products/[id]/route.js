import { readProducts, writeProducts } from '@/lib/file'

export async function DELETE(_, { params }) {
  const id = parseInt(params.id)
  const products = await readProducts()
  const index = products.findIndex((p) => p.id === id)

  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Product not found' }), { status: 404 })
  }

  const deleted = products.splice(index, 1)
  await writeProducts(products)

  return Response.json({ message: 'Deleted', product: deleted[0] })
}
