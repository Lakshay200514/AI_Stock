import { Search, TrendingUp } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="absolute top-24 left-1/2 z-40 w-[90%] max-w-xl -translate-x-1/2">

      {/* Search Box */}
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">

        <Search
          size={18}
          className="text-gray-400 shrink-0"
        />

        <input
          type="text"
          placeholder="Search stocks..."
          className="flex-1 min-w-0 bg-transparent text-white placeholder:text-gray-500 focus:outline-none text-sm sm:text-base"
        />

        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-3 py-2 text-xs sm:text-sm text-orange-400">
          <TrendingUp size={16} />
          AI Search
        </div>

      </div>
    </div>
  );
}