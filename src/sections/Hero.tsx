export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden scroll-snap-start">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto de perfil octágono com efeito de balanço e subida */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 animate-float-swing">
              <div
                className="w-full h-full bg-stone-400/30 overflow-hidden transition-transform duration-300 hover:scale-110"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <img
                  src="/images/perfil do curriculo.jpg"
                  alt="Jackson Felipe"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden",
                    );
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-5xl md:text-6xl hidden">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo de texto */}
          <div className="flex-1 text-center md:text-left">
            {/* Título principal */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                <span className="block text-stone-700 mb-2">Olá, eu sou</span>
                <span className="bg-gradient-to-r from-stone-800 to-amber-800 bg-clip-text text-transparent animate-gradient">
                  Jackson Felipe
                </span>
              </h1>
            </div>

            {/* Subtítulo */}
            <h2 className="text-xl md:text-2xl font-bold text-stone-700 mb-6 opacity-0 animate-fade-in-up">
              Desenvolvedor{" "}
              <span className="text-amber-700 animate-pulse">Full Stack</span>
            </h2>

            {/* Descrição com fade in */}
            <p className="text-base md:text-lg text-stone-800 max-w-2xl mb-8 leading-relaxed opacity-0 animate-fade-in-up-delay-1">
              Especializado em criar sistemas web completos e eficientes. Domino
              desde a interface do usuário até a infraestrutura do servidor,
              entregando soluções que transformam ideias em produtos reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
