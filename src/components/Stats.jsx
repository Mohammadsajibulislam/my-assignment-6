const Stats = () => {
  return (
    <section className="bg-purple-600 py-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around text-white text-center gap-8">
        
        {/* Stat 1 */}
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-purple-200 mt-1">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-purple-400"></div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-purple-200 mt-1">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-purple-400"></div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-purple-200 mt-1">Rating</p>
        </div>

      </div>
    </section>
  )
}

export default Stats