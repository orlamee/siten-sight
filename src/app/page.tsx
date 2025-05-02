import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Learning from "./components/Learning";
import Navbar from "./components/Navbar";
import ScanFeature from "./components/Scan";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Knowledge/>
      <Learning/>
      <Community/>
      <ScanFeature/>
      <Footer/>
    </div>
  );
}
