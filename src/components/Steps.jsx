import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userImg,
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageImg,
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketImg,
  },
]

const Steps = () => {
  return (
    <section className="py-16 px-10 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Get Started In 3 Steps</h2>
        <p className="text-gray-500 text-sm mt-2">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {steps.map(step => (
            <div key={step.id} className="bg-white rounded-2xl p-8 text-center relative shadow-sm">
              {/* Step Number */}
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 mt-2">
                <div className="bg-purple-100 p-4 rounded-full">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-gray-800 text-lg">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps