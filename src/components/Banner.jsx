import bannerImg from '../assets/banner.png'
import playImg from '../assets/Play.png'

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 max-w-6xl mx-auto">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-5">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          New: AI-Powered Tools Available
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>
        <p className="text-gray-500 text-sm">Explore Products</p>

        {/* Buttons */}
        {/* Buttons */}
    <div className="flex items-center gap-4">
  <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 text-sm font-medium">
    Explore Products
   </button>
   <button className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-6 py-3 rounded-full border-purple-600 hover:text-purple-600">
    <img src={playImg} alt="play" className="w-5 h-5" />
    Watch Demo
  </button>
    </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
        <img src={bannerImg} alt="banner" className="w-full max-w-md rounded-2xl" />
      </div>
    </section>
  )
}

export default Banner