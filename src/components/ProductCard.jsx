const tagColors = {
  popular: "bg-purple-100 text-purple-600",
  new: "bg-green-100 text-green-600",
  "best seller": "bg-orange-100 text-orange-600",
}

const ProductCard = ({ product, onAddToCart }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product

  return (
    <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow">
      {/* Tag */}
      <div className="flex justify-end">
        <span className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[tagType]}`}>
          {tag}
        </span>
      </div>

      {/* Icon & Name */}
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm">{description}</p>

      {/* Price */}
      <div className="text-2xl font-bold text-gray-900">
        ${price}
        <span className="text-sm font-normal text-gray-500">/{period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-purple-600">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-purple-600 text-white py-3 rounded-full hover:bg-purple-700 text-sm font-medium"
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard