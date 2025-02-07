import Hero from "./components/Hero"
import Schemes from "./components/Schemes"
import NewsUpdates from "./components/NewsUpdates"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Schemes />
      <NewsUpdates />
      <div className="text-center mt-8">
        <Link
          href="/schemes"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View All Schemes
        </Link>
      </div>
    </div>
  )
}

