import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packges";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export default function App() {
  const nav = [
    { id: "servicios", label: "Servicios" },
    { id: "portfolio", label: "Portfolio" },
    { id: "paquetes", label: "Paquetes" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "faq", label: "FAQ" },
    { id: "contacto", label: "Contacto" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen text-neutral-900 bg-white">
      <Header nav={nav} onNavClick={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Services />
      <Packages onScrollTo={scrollTo} />
      <About />
      <FAQ />
      <Contact />
      <Footer onScrollTo={scrollTo} />
    </div>
  );
}
