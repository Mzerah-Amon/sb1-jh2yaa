import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img src="/logo.png" alt="Cue-Bar Communications Logo" className="h-12" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600">About</Link>
            <Link href="#services" className="text-gray-800 hover:text-blue-600">Services</Link>
            <Link href="#equipment" className="text-gray-800 hover:text-blue-600">Equipment</Link>
            <Link href="#contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header