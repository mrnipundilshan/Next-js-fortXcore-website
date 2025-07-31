export default function About() {
    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        About <span className="text-blue-600">Us</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a team of passionate developers and designers dedicated to creating innovative IT solutions that drive business growth and success.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600">Cutting-edge solutions that keep you ahead of the competition.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
                            <p className="text-gray-600">High-quality code and design that stands the test of time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
                            <p className="text-gray-600">24/7 support to ensure your success every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}