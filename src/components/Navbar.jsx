import { ShoppingCart } from 'lucide-react'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-600">DigiTools</div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-purple-600">Products</li>
        <li className="cursor-pointer hover:text-purple-600">Features</li>
        <li className="cursor-pointer hover:text-purple-600">Pricing</li>
        <li className="cursor-pointer hover:text-purple-600">Testimonials</li>
        <li className="cursor-pointer hover:text-purple-600">FAQ</li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Cart Icon */}
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-gray-600" size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <button className="text-sm text-gray-600 hover:text-purple-600">Login</button>
        <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar