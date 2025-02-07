import Image from "next/image"

const schemes = [
  { id: 1, title: "Education Scheme", description: "Support for students" },
  { id: 2, title: "Healthcare Scheme", description: "Medical assistance for all" },
  { id: 3, title: "Agriculture Scheme", description: "Support for farmers" },
  { id: 4, title: "Employment Scheme", description: "Job opportunities for youth" },
]

export default function Schemes() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Schemes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=300`}
              alt={scheme.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{scheme.title}</h3>
              <p className="text-gray-700">{scheme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

