"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
  }

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Find Government Schemes</h2>
        <p className="mb-8">Search for schemes that can benefit you</p>
        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for schemes..."
              className="w-full px-4 py-2 rounded-full text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-2 text-gray-600">
              <Search size={24} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

