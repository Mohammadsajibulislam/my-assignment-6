const Cart = ({ cart, onRemoveFromCart, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-2xl mx-auto">
      {cart.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-xl">Your cart is empty!</p>
          <p className="text-sm mt-2">Add some products to get started.</p>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800 text-lg">Your Cart</h3>
          </div>

          {/* Cart Items */}
          <div className="space-y-3">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <span className="text-gray-600 text-sm">Total</span>
            <span className="font-bold text-gray-900 text-lg">${total}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={onCheckout}
            className="w-full bg-purple-600 text-white py-3 rounded-full mt-4 hover:bg-purple-700 text-sm font-medium"
          >
            Proceed To Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart