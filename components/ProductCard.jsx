'use client'

import React from 'react'
import Link from 'next/link'

const ProductCard = ({ id, name, price, image }) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-full bg-white p-4 rounded-lg transition duration-300 hover:scale-105 cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="mt-3 text-xl font-semibold">{name}</h3>
        <p className="mt-1 text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default ProductCard
