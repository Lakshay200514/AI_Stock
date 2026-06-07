import {
  Brain,
  TrendingUp,
  ShieldCheck,
  Newspaper,
  PieChart,
  Activity,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Brain size={32} />,
      title: "AI Trading Signals",
      desc: "Receive AI-generated buy, hold, and sell recommendations based on market behavior.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Price Prediction",
      desc: "Forecast stock movements using advanced machine learning models.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Risk Analysis",
      desc: "Evaluate volatility and portfolio exposure before making decisions.",
    },
    {
      icon: <Newspaper size={32} />,
      title: "Market Sentiment",
      desc: "Analyze news and social sentiment to identify market-moving trends.",
    },
    {
      icon: <PieChart size={32} />,
      title: "Portfolio Intelligence",
      desc: "Track performance and discover optimization opportunities.",
    },
    {
      icon: <Activity size={32} />,
      title: "Real-Time Data",
      desc: "Access live market prices, volume changes, and AI-powered insights.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
            Features
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            AI-Powered Market Intelligence
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Transform raw market data into actionable investment insights
            with cutting-edge artificial intelligence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-orange-500 mb-5">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

              <div className="mt-6 h-0.5 w-0 bg-orange-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}