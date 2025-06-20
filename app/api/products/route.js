import { readProducts, writeProducts } from '@/lib/file'

export async function GET() {
  const products = await readProducts()
  return Response.json(products)
}

export async function POST(req) {
  const { name, price, image } = await req.json()

  if (!name || !price || !image) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
  }

  const products = await readProducts()
  const newProduct = {
    id: Date.now(),
    name,
    price,
    image,
  }

  products.push(newProduct)
  await writeProducts(products)

  return Response.json(newProduct, { status: 201 })
}
