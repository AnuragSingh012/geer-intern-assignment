'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('search') || ''
  
  const [search, setSearch] = useState(initialQuery)
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!products.length) return
    const query = search.toLowerCase()
    const filteredList = products.filter((p) =>
      p.name.toLowerCase().includes(query)
    )
    setFiltered(filteredList)
  }, [search, products])

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/products?search=${encodeURIComponent(search.trim())}`)
  }

  return (
    <div className="px-4 py-6">
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
          Search
        </button>
      </form>

      <h2 className="text-2xl font-bold mb-4">
        {search ? (
          <>Showing results for: <span className="text-blue-500">{search}</span></>
        ) : (
          'All Products'
        )}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => <ProductCard key={product.id} {...product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}
