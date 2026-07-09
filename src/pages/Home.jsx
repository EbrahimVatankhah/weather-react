import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { getWeatherByCity } from "../services/weatherApi";

const Home = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getWeatherByCity(debouncedSearch);
        setResult(data);
      } catch (err) {
        setError(err.message);
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [debouncedSearch]);
  return (
    <div className="min-h-[calc(100vh-72px)] flex flex-col items-center bg-gradient-to-br from-sky-1 via-sky-2 to-indigo-2 dark:from-slate-900 dark:via-navy-mid dark:to-indigo-3 px-4 py-8">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        {/* Search card */}
        <div className="w-full font-bold text-center bg-glass-light border border-glass-light-border dark:bg-glass-dark dark:border-glass-dark-border text-indigo-2 dark:text-white p-6 rounded-2xl backdrop-blur-xl">
          <h2 className="text-2xl">Search Here</h2>
          <input
            className="mt-4 p-2 w-full border border-indigo-2 dark:border-white rounded-2xl bg-white/40 dark:bg-white/5 outline-none focus:ring-2 focus:ring-indigo-2 dark:focus:ring-white transition"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search city..."
          />
        </div>

        {loading && (
          <div className="w-full flex flex-col items-center gap-3 bg-glass-light border border-glass-light-border dark:bg-glass-dark dark:border-glass-dark-border p-8 rounded-2xl backdrop-blur-xl">
            <div className="w-8 h-8 border-4 border-indigo-2/30 dark:border-white/30 border-t-indigo-2 dark:border-t-white rounded-full animate-spin" />
            <p className="text-sm text-indigo-2 dark:text-white/80">
              Loading...
            </p>
          </div>
        )}

        {error && !loading && (
          <div className="w-full text-center bg-red-100/60 dark:bg-red-400/10 border border-red-300 dark:border-red-400/30 p-8 rounded-2xl backdrop-blur-xl">
            <p className="text-3xl mb-2">❌</p>
            <p className="font-semibold text-red-700 dark:text-red-300">
              City not found
            </p>
          </div>
        )}

        {result && !loading && !error && (
          <div className="w-full text-center bg-glass-light border border-glass-light-border dark:bg-glass-dark dark:border-glass-dark-border text-indigo-2 dark:text-white p-6 rounded-2xl backdrop-blur-xl hover:-translate-y-1 transition-transform">
            <p className="text-lg font-medium opacity-80">{result.name}</p>
            <p className="text-6xl my-2">☀️</p>
            <p className="text-5xl font-bold -tracking-wide">
              {Math.round(result.main?.temp)}°C
            </p>

            <div className="flex justify-between mt-4 pt-4 border-t border-indigo-2/20 dark:border-white/10 text-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase opacity-60">Feels like</span>
                <span className="font-medium">
                  {Math.round(result.main?.feels_like)}°C
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase opacity-60">Humidity</span>
                <span className="font-medium">{result.main?.humidity}%</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase opacity-60">Wind</span>
                <span className="font-medium">
                  {(result.wind?.speed * 3.6).toFixed(1)} km/h
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
