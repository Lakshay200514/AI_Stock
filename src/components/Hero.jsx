import Hyperspeed from "./Hyperspeed";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 z-1" />

      {/* Existing Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-0">

          {/* Left Side */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className="text-orange-500 uppercase tracking-[3px] font-semibold mb-4 text-sm sm:text-base">
              AI STOCK INTELLIGENCE
            </p>

            <h1 className="text-white font-black leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              AI STOCK
              <br />
              ANALYTICS.
            </h1>

            <h2 className="text-gray-300 font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4">
              THE INSIGHTS
              <br />
              THAT KEEP YOU
              <br />
              AHEAD.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Explore Stocks →
              </button>

              <button className="border border-gray-700 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/3 mt-12 lg:mt-0 text-center lg:text-left">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Discover market opportunities with AI-powered analysis,
              real-time stock insights, predictive signals, and portfolio
              intelligence designed for modern investors.
            </p>

            <div className="mt-6 border-t border-gray-800 pt-4 flex justify-center lg:justify-start gap-6 text-xs sm:text-sm uppercase text-gray-500">
              <span>AI Signals</span>
              <span>Real-Time Data</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}