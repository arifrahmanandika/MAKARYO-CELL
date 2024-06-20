import About from "./about/page";
import HeroSection from "./element/heroSection";
import Products from "./products/page";
import Teams from "./teams/page";
import Testimoni from "./testimoni/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Products />
      <Teams />
      <Testimoni />
    </div>
  );
}
