import { useState } from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

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
        <Contact />
      </main>
      <footer className="bg-card text-text py-6 text-center">
        &copy; {new Date().getFullYear()} Anani Hounas Titonou. Tous droits
        réservés.
      </footer>
    </>
  );
}

export default App;