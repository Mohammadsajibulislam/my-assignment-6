const CallToAction = () => {
  return (
    <section className="bg-purple-600 py-16 px-10 text-center text-white">
      <h2 className="text-3xl font-bold">Ready To Transform Your Workflow?</h2>
      <p className="text-purple-200 text-sm mt-3">
        Join thousands of professionals who are already using Digitools to work smarter.
        <br />Start your free trial today.
      </p>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-purple-600 transition-all">
          Explore Products
        </button>
        <button className="border border-white text-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-purple-600 transition-all">
          View Pricing
        </button>
      </div>

      <p className="text-purple-200 text-xs mt-4">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </section>
  )
}

export default CallToAction