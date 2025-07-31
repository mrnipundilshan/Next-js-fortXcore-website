import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[700px] relative px-4 md:px-28 pt-20 pb-16 bg-white flex items-center justify-between">
      <div className=" max-w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-x-[400px] items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Transforming Ideas
                <br />
                <span className="text-primary">into Scalable IT</span>
                <br />
                <span className="text-primary">Solutions</span>
              </h1>

              <p className="text-xl text-black max-w-2xl">
                Don&apos;t overthink it—upgrade your business today!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-[750px]">
            <Image
              src="/homepageimage1.png"
              alt="homepageimage1 Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
