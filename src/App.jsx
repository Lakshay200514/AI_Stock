import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Features from "./components/Feature";
import Stats from "./components/Stats";
import DashboardPreview from "./components/DashboardPreview";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Hero />
      <Features/>
      <Stats/>
      <DashboardPreview/>
      <Testimonials/>
      <Footer/>
    </>
  );
}