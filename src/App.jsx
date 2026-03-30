import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id)
    if (!exists) {
      setCart([...cart, product])
    }
  }

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const handleCheckout = () => {
    setCart([])
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <Products
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App