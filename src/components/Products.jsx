import { useState } from 'react'
import ProductCard from './ProductCard'
import Cart from './Cart'
import products from '../products.js'

const Products = ({ cart, onAddToCart, onRemoveFromCart, onCheckout }) => {
  const [activeTab, setActiveTab] = useState('products')

  return (
    <section className="py-16 px-10 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-2 text-sm">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 border border-gray-300 rounded-full w-max mx-auto">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'products'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'cart'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
           <ProductCard
           key={product.id}
           product={product}
           onAddToCart={onAddToCart}
           cart={cart}
          />
          ))}
        </div>
      )}

      {/* Cart Section */}
      {activeTab === 'cart' && (
        <Cart
          cart={cart}
          onRemoveFromCart={onRemoveFromCart}
          onCheckout={onCheckout}
        />
      )}
    </section>
  )
}

export default Products