import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Features from "./components/Feature";
import Stats from "./components/Stats";
export default function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Hero />
      <Features/>
      <Stats/>
    </>
  );
}