"use client"

import { useState } from "react"

type FilterOption = {
  label: string
  value: string
}

const schemeTypes: FilterOption[] = [
  { label: "State Sponsored", value: "state-sponsored" },
  { label: "Centrally Sponsored", value: "centrally-sponsored" },
  { label: "Credit Linked", value: "credit-linked" },
  { label: "Pension", value: "pension" },
  { label: "Scholarship", value: "scholarship" },
]

const categories: FilterOption[] = [
  { label: "Education", value: "education" },
  { label: "Health", value: "health" },
  { label: "Agriculture", value: "agriculture" },
  { label: "Employment", value: "employment" },
]

export default function SchemeFilters({ onFilterChange }: { onFilterChange: (filters: any) => void }) {
  const [filters, setFilters] = useState({
    schemeType: [],
    category: [],
    status: "active",
  })

  const handleFilterChange = (filterType: string, value: string) => {
    const updatedFilters = { ...filters }
    if (filterType === "status") {
      updatedFilters.status = value
    } else {
      const index = updatedFilters[filterType].indexOf(value)
      if (index > -1) {
        updatedFilters[filterType].splice(index, 1)
      } else {
        updatedFilters[filterType].push(value)
      }
    }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Scheme Type</h4>
        {schemeTypes.map((type) => (
          <div key={type.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={type.value}
              value={type.value}
              checked={filters.schemeType.includes(type.value)}
              onChange={() => handleFilterChange("schemeType", type.value)}
              className="mr-2"
            />
            <label htmlFor={type.value}>{type.label}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h4 className="font-medium mb-2">Category</h4>
        {categories.map((category) => (
          <div key={category.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category.value}
              value={category.value}
              checked={filters.category.includes(category.value)}
              onChange={() => handleFilterChange("category", category.value)}
              className="mr-2"
            />
            <label htmlFor={category.value}>{category.label}</label>
          </div>
        ))}
      </div>

      <div>
        <h4 className="font-medium mb-2">Status</h4>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="active"
            value="active"
            checked={filters.status === "active"}
            onChange={() => handleFilterChange("status", "active")}
            className="mr-2"
          />
          <label htmlFor="active">Active</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="inactive"
            value="inactive"
            checked={filters.status === "inactive"}
            onChange={() => handleFilterChange("status", "inactive")}
            className="mr-2"
          />
          <label htmlFor="inactive">Inactive</label>
        </div>
      </div>
    </div>
  )
}

