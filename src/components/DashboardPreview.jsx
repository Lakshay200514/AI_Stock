export default function DashboardPreview() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
            Dashboard Preview
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            See AI In Action
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Monitor market trends, track portfolio performance,
            and receive AI-powered insights through a modern dashboard.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-white text-3xl font-bold mb-6">
              Everything You Need In One Place
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <p className="text-gray-300">
                  AI-Powered Stock Predictions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Portfolio Performance Tracking
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Real-Time Market Insights
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <p className="text-gray-300">
                  Risk Analysis & Forecasting
                </p>
              </div>

            </div>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white font-semibold">
              Explore Dashboard
            </button>

          </div>

          {/* Right Side */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">

            {/* Top Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">

              <div className="bg-zinc-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  Portfolio Value
                </p>
                <h4 className="text-white text-2xl font-bold mt-2">
                  $124,580
                </h4>
                <p className="text-green-500 text-sm mt-2">
                  +8.4%
                </p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  AI Confidence
                </p>
                <h4 className="text-white text-2xl font-bold mt-2">
                  87%
                </h4>
                <p className="text-orange-500 text-sm mt-2">
                  Bullish Signal
                </p>
              </div>

            </div>

            {/* Fake Chart */}
            <div className="bg-zinc-800 rounded-xl p-5 mb-6">

              <div className="flex justify-between mb-4">
                <span className="text-white font-semibold">
                  Stock Performance
                </span>

                <span className="text-green-500">
                  +12.4%
                </span>
              </div>

              <div className="h-40 flex items-end gap-2">
                <div className="bg-orange-500 w-full h-12 rounded"></div>
                <div className="bg-orange-500 w-full h-20 rounded"></div>
                <div className="bg-orange-500 w-full h-14 rounded"></div>
                <div className="bg-orange-500 w-full h-28 rounded"></div>
                <div className="bg-orange-500 w-full h-24 rounded"></div>
                <div className="bg-orange-500 w-full h-36 rounded"></div>
                <div className="bg-orange-500 w-full h-32 rounded"></div>
              </div>

            </div>

            {/* Watchlist */}
            <div className="bg-zinc-800 rounded-xl p-4">

              <h4 className="text-white font-semibold mb-4">
                Watchlist
              </h4>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-gray-300">AAPL</span>
                  <span className="text-green-500">+2.4%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">NVDA</span>
                  <span className="text-green-500">+4.8%</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-300">TSLA</span>
                  <span className="text-red-500">-1.2%</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}