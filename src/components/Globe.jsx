import stockVideo from "../assets/Stock.mp4";

export default function Globe() {
  return (
    <div className="p-10">
      <h1 className="text-white text-3xl">Video Test</h1>

      <p className="text-white">
        Video path: {stockVideo}
      </p>

      <video
        controls
        className="w-full max-w-2xl mt-4"
      >
        <source src={stockVideo} type="video/mp4" />
      </video>
    </div>
  );
}