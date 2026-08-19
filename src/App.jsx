import { useState } from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
      <Navbar />
      <main className="bg-bg min-h-screen text-text">
        <Hero />
        <About />
        <Portfolio />
        <section id="contact" className="min-h-screen">Contact</section>
      </main>
    </>
  );
}

export default App;