export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Carter",
      role: "Retail Investor",
      review:
        "The platform provides an intuitive dashboard and makes market analysis much easier to understand.",
    },
    {
      name: "Sarah Johnson",
      role: "Financial Analyst",
      review:
        "Clean design, powerful insights, and an excellent user experience for tracking market trends.",
    },
    {
      name: "David Wilson",
      role: "Portfolio Manager",
      review:
        "A modern solution that combines AI-driven analytics with a beautiful and responsive interface.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-[3px] font-semibold">
            Testimonials
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            What Investors Say
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Trusted by investors, analysts, and traders looking for
            smarter market insights.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5 text-orange-500 text-xl">
                ★★★★★
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{item.review}"
              </p>

              {/* User */}
              <div className="border-t border-zinc-800 pt-4">
                <h4 className="text-white font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}