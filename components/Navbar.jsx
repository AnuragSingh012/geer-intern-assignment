'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SearchBarWithSuggestions from './SearchBarWithSuggestions'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/products?search=${encodeURIComponent(search.trim())}`)
    }
  }

  return (
    <nav className='fixed w-full flex flex-col items-center justify-center px-6 py-3 z-50 bg-white'>
      <div className='flex w-full justify-between items-center'>
        <Link href="/" className='flex items-center gap-1'>
          <Image
            src="https://placehold.co/200x200.png"
            alt="Logo"
            width={28}
            height={28}
          />
          <p className='font-bold max-xs:hidden'>Logo</p>
        </Link>
        <div className='flex items-center gap-1'>
          <div>logout</div>
        </div>
      </div>
      

     <div className="px-4 py-6 w-full">
      <SearchBarWithSuggestions />
    </div>
    </nav>
  )
}

export default Navbar
