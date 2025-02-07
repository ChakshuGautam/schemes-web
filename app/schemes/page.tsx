"use client"

import { useState } from "react"
import SchemeFilters from "../components/SchemeFilters"
import SchemeCard from "../components/SchemeCard"

// Mock data for schemes
const mockSchemes = [
  {
    id: "1",
    name: "Education for All",
    shortDescription: "Providing free education to underprivileged children",
    schemeType: "state-sponsored",
    category: "education",
    status: "active",
  },
  {
    id: "2",
    name: "Rural Health Initiative",
    shortDescription: "Improving healthcare access in rural areas",
    schemeType: "centrally-sponsored",
    category: "health",
    status: "active",
  },
  {
    id: "3",
    name: "Farmer Support Program",
    shortDescription: "Financial assistance for small and marginal farmers",
    schemeType: "credit-linked",
    category: "agriculture",
    status: "inactive",
  },
]

export default function SchemesPage() {
  const [filteredSchemes, setFilteredSchemes] = useState(mockSchemes)

  const handleFilterChange = (filters) => {
    const filtered = mockSchemes.filter((scheme) => {
      return (
        (filters.schemeType.length === 0 || filters.schemeType.includes(scheme.schemeType)) &&
        (filters.category.length === 0 || filters.category.includes(scheme.category)) &&
        scheme.status === filters.status
      )
    })
    setFilteredSchemes(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Government Schemes</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <SchemeFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchemes.map((scheme) => (
              <SchemeCard
                key={scheme.id}
                id={scheme.id}
                name={scheme.name}
                shortDescription={scheme.shortDescription}
                schemeType={scheme.schemeType}
                category={scheme.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

