import Community from "./components/Community";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Knowledge from "./components/Knowledge";
import Learning from "./components/Learning";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Knowledge/>
      <Learning/>
      <Community/>
      <Footer/>
    </div>
  );
}
