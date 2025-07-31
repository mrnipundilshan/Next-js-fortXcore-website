export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforming Ideas into{' '}
                <span className="text-blue-600">Scalable IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Don&apos;t overthink it—upgrade your business today!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              {/* Placeholder for the illustration */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-600">Dynamic IT Solutions</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-500 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-600 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
