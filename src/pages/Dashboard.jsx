export default function Dashboard() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold">
        AI Stock Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2>Current Price</h2>
          <p className="text-green-400 text-3xl">
            ₹1450
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2>Predicted Price</h2>
          <p className="text-blue-400 text-3xl">
            ₹1480
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h2>Signal</h2>
          <p className="text-green-400 text-3xl">
            BUY
          </p>
        </div>

      </div>
    </div>
  );
}