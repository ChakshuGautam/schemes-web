import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/placeholder.svg?height=50&width=50" alt="MyScheme Logo" width={50} height={50} />
          <h1 className="ml-2 text-2xl font-bold">MyScheme</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/schemes" className="hover:underline">
                Schemes
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

