import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import Products from './components/Products'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import { useState } from 'react'

import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const [cart, setCart] = useState([])
  
  const handleAddToCart = (product) => {
  const exists = cart.find(item => item.id === product.id)
  if (!exists) {
    setCart([...cart, product])
    toast.success(`${product.name} added to cart!`)
  } else {
    toast.warning(`${product.name} already in cart!`)
  }
}

const handleRemoveFromCart = (id) => {
  const item = cart.find(item => item.id === id)
  setCart(cart.filter(item => item.id !== id))
  toast.error(`${item.name} removed from cart!`)
}

const handleCheckout = () => {
  setCart([])
  toast.success('Checkout successful! Cart cleared.')
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
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App