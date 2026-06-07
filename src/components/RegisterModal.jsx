function RegisterModal({ open, close }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-xl w-96">

        <h2 className="text-white text-2xl mb-4">
          Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-3 rounded bg-slate-800 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded bg-slate-800 text-white"
        />

        <button className="w-full bg-green-500 p-3 rounded">
          Register
        </button>

        <button
          onClick={close}
          className="w-full mt-2 text-red-400"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default RegisterModal;