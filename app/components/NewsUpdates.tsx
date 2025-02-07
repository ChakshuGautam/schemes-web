const newsItems = [
  { id: 1, title: "New Education Policy Announced", date: "2023-07-15" },
  { id: 2, title: "Healthcare Scheme Extended to Rural Areas", date: "2023-07-10" },
  { id: 3, title: "Farmers to Receive Additional Subsidies", date: "2023-07-05" },
]

export default function NewsUpdates() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">News and Updates</h2>
        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

