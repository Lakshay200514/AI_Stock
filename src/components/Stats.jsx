export default function Stats() {
  const stats = [
    {
      value: "98.7%",
      label: "Prediction Accuracy",
    },
    {
      value: "10M+",
      label: "Data Points Analyzed",
    },
    {
      value: "50K+",
      label: "Active Investors",
    },
    {
      value: "24/7",
      label: "Market Monitoring",
    },
    {
      value: "500+",
      label: "Stocks Covered",
    },
    {
      value: "1.2M+",
      label: "AI Signals Generated",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
            Statistics
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            Trusted By Modern Investors
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Our AI continuously analyzes market trends, technical indicators,
            and financial data to deliver intelligent insights.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300"
            >
              <h3 className="text-white text-4xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>
            </div>
          ))}

        </div>
        <div className="text-center mt-16">
          <p className="text-gray-500 text-lg">
            Powered by Machine Learning, Real-Time Market Data,
            and Advanced Predictive Analytics.
          </p>
        </div>

      </div>
    </section>
  );
}