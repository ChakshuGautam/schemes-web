import Link from "next/link"

type SchemeCardProps = {
  id: string
  name: string
  shortDescription: string
  schemeType: string
  category: string
}

export default function SchemeCard({ id, name, shortDescription, schemeType, category }: SchemeCardProps) {
  return (
    <Link href={`/schemes/${id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{shortDescription}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{schemeType}</span>
          <span>{category}</span>
        </div>
      </div>
    </Link>
  )
}

