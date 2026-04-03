import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Contato from "./sections/Contato";
import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-stone-300 via-stone-200 to-amber-100 text-stone-800 relative overflow-x-hidden scroll-smooth scroll-snap-y scroll-snap-mandatory">
      {/* Background animated particles global */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-stone-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-amber-300/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        {/* Cometas octogonais */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-stone-500/40 transform rotate-45 animate-comet-1"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-amber-500/40 transform rotate-45 animate-comet-2"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-stone-500/40 transform rotate-45 animate-comet-3"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-amber-500/40 transform rotate-45 animate-comet-4"></div>
        <div className="absolute top-60 left-60 w-4 h-4 bg-stone-400/40 transform rotate-45 animate-comet-5"></div>
        <div className="absolute top-80 right-60 w-3 h-3 bg-amber-400/40 transform rotate-45 animate-comet-6"></div>
      </div>

      <Navbar />

      <main className="pt-16">
        <section id="home" className="scroll-snap-start">
          <Hero />
        </section>

        <section id="sobre" className="scroll-snap-start">
          <Sobre />
        </section>

        <section id="projetos" className="scroll-snap-start">
          <Projetos />
        </section>

        <section id="contato" className="scroll-snap-start">
          <Contato />
        </section>
      </main>

      <Footer />
    </div>
  );
}
