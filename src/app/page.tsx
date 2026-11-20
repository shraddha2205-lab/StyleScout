import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import TrendingProducts from "./components/TrendingProducts";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import { ShopProvider } from "./components/ShopContext";

const categories = [
  "Dresses",
  "Tops",
  "Kurtis",
  "Sarees",
  "Western Wear",
];

const products = [
  {
    name: "Floral Summer Dress",
    price: "₹1,299",
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elegant White Top",
    price: "₹899",
    category: "Tops",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Printed Ethnic Kurti",
    price: "₹1,099",
    category: "Kurtis",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Classic Party Dress",
    price: "₹1,599",
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f5] text-zinc-900">
     <Navbar /> 
     <Hero />
     <Categories />
     <TrendingProducts />
     <VideoSection />
     <Footer />
     
    </main>
  );
}  