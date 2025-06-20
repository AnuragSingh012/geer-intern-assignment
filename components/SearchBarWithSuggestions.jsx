'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBarWithSuggestions = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [allProducts, setAllProducts] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products')
      const data = await res.json()
      setAllProducts(data)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([])
      return
    }
    const matches = allProducts
      .filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5)
    setSuggestions(matches)
  }, [query, allProducts])

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query.trim())}`)
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (name) => {
    setQuery(name)
    router.push(`/products?search=${encodeURIComponent(name)}`)
    setSuggestions([])
  }

  return (
    <div className="relative w-full">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {suggestions.map((s) => (
            <li
              key={s.id}
              onClick={() => handleSuggestionClick(s.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBarWithSuggestions
