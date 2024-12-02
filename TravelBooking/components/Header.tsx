'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Globe, User } from 'lucide-react'

const Header = () => {
  const [language, setLanguage] = useState('EN')

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">TravelEase</Link>
        <nav className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
            <Globe size={20} />
            <span>{language}</span>
          </button>
          <Link href="/login" className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
            <User size={20} />
            <span>Login</span>
          </Link>
          <Link href="/register" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Register
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

