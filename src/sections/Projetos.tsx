import { useLoading } from "../hooks/useLoading";
import { CardSkeleton } from "../components/LoadingStates";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// Componente separado para o card com Vanilla Tilt
function ProjectCard({ projeto, i, getStatusColor, hasLoaded }: any) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tiltElement = tiltRef.current;

    // Aguardar o carregamento do Vanilla Tilt e do elemento
    const initTilt = () => {
      if (tiltElement && typeof window !== "undefined" && VanillaTilt) {
        try {
          // Verificar se o elemento está no DOM
          if (!document.contains(tiltElement)) {
            return;
          }

          // Destruir instância anterior se existir
          if ((tiltElement as any).vanillaTilt) {
            (tiltElement as any).vanillaTilt.destroy();
          }

          const vanillaTilt = VanillaTilt.init(tiltElement, {
            max: 20,
            speed: 300,
            glare: true,
            "max-glare": 0.6,
            scale: 1.15,
            perspective: 1200,
            reset: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            "full-page-listening": false,
          });

          // Guardar referência para destruição posterior
          (tiltElement as any).vanillaTilt = vanillaTilt;
        } catch (error) {
          console.warn("Vanilla Tilt initialization failed:", error);
        }
      }
    };

    // Aguardar o elemento estar montado no DOM
    const timeoutId = setTimeout(() => {
      initTilt();
    }, 100); // Pequeno delay para garantir que o elemento está no DOM

    return () => {
      clearTimeout(timeoutId);
      if (tiltElement && (tiltElement as any).vanillaTilt) {
        (tiltElement as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      key={i}
      ref={tiltRef}
      className={`group bg-stone-100/90 backdrop-blur-sm rounded-2xl border border-stone-300 hover:border-amber-500 transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl hover:shadow-amber-400/30 overflow-hidden opacity-0 animate-fade-in-delay-2 ${
        hasLoaded ? "fade-in-loading" : ""
      }`}
      style={{
        animationDelay: `${i * 0.1}s`,
        transformStyle: "preserve-3d",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Header do card */}
      <div className="p-6 border-b border-stone-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-stone-600 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
            <span className="text-xl font-bold text-white group-hover:rotate-12 transition-transform duration-300">
              {projeto.nome.charAt(0)}
            </span>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(projeto.status)} group-hover:scale-110 transition-transform duration-300`}
          >
            {projeto.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-amber-700 transition-colors duration-300 group-hover:translate-y-[-2px]">
          {projeto.nome}
        </h3>

        <p className="text-stone-600 text-sm leading-relaxed mb-4 group-hover:text-stone-700 transition-colors duration-300">
          {projeto.desc}
        </p>

        {/* Tecnologias com hover */}
        <div className="flex flex-wrap gap-2 mb-4">
          {projeto.tecnologias.map((tech: string, j: number) => (
            <span
              key={j}
              className="px-2 py-1 bg-stone-200/50 rounded-md text-xs text-stone-600 border border-stone-300 hover:border-amber-500 hover:text-amber-700 hover:bg-amber-100/50 transition-all duration-300 hover:scale-110 hover:shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer com ações melhoradas */}
      <div className="p-4 bg-stone-50/50 flex gap-3">
        <a
          href={projeto.link}
          className="flex-1 px-4 py-2 bg-amber-600 text-white rounded-lg font-semibold text-sm hover:bg-amber-700 hover:scale-105 transition-all duration-300 text-center hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-1"
        >
          Ver Projeto
        </a>
        <a
          href={projeto.github}
          className="flex-1 px-4 py-2 border border-stone-400 rounded-lg font-semibold text-sm hover:bg-stone-200 hover:border-amber-500 hover:text-amber-700 transition-all duration-300 text-center text-stone-600 hover:shadow-md hover:-translate-y-1"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projetos() {
  const { isLoading, hasLoaded } = useLoading(2000); // 2 segundos de loading
  const projetos = [
    {
      nome: "Sistema de Relatório de Produção",
      desc: "Sistema completo com login, dashboard e envio automático de relatórios por email.",
      tecnologias: ["React", "Node.js", "MongoDB", "JWT"],
      status: "Concluído",
      link: "https://saboraki-front-end-mbo3.vercel.app/",
      github: "#",
    },
    {
      nome: "Jogo do Mario",
      desc: "Jogo clássico do Mario desenvolvido com JavaScript, CSS e HTML puro, com mecânicas de pulo, colisão e pontuação.",
      tecnologias: ["JavaScript", "CSS", "HTML", "Game Dev"],
      status: "Concluído",
      link: "https://mario-style-20e4aiy03-jacksonfelipeafs-projects.vercel.app/",
      github: "#",
    },
    {
      nome: "Dashboard Web",
      desc: "Painel com cálculos em tempo real e análise de produção.",
      tecnologias: ["React", "Chart.js", "API REST"],
      status: "Concluído",
      link: "#",
      github: "#",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluído":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Em andamento":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projetos" className="py-24 px-6 relative scroll-snap-start">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-stone-800 via-amber-700 to-stone-800 bg-clip-text text-transparent animate-gradient bg-size-200 opacity-0 animate-fade-in">
            Meus Projetos
          </h2>
          <p className="text-stone-700 max-w-2xl mx-auto text-lg opacity-0 animate-fade-in-delay-1">
            Soluções reais desenvolvidas com foco em performance e usabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Mostrar skeletons enquanto carrega
              Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            : // Mostrar projetos reais após loading
              projetos.map((projeto, i) => (
                <ProjectCard
                  key={i}
                  projeto={projeto}
                  i={i}
                  getStatusColor={getStatusColor}
                  hasLoaded={hasLoaded}
                />
              ))}
        </div>

        {/* Call to action animado */}
        <div className="text-center mt-16 opacity-0 animate-fade-in-delay-3">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://github.com/JacksonfelipeAF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-stone-200 border border-stone-400 rounded-lg hover:border-amber-500 hover:scale-105 transition-all flex items-center gap-2 group text-stone-700"
            >
              <span className="group-hover:rotate-12 transition-transform">
                📁
              </span>
              <span>Ver mais no GitHub</span>
            </a>
            <p className="text-stone-500 text-sm animate-pulse">
              Mais projetos em breve...
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-delay-1 { animation: fade-in 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in-delay-3 { animation: fade-in 0.8s ease-out 0.6s forwards; opacity: 0; }
      `}</style>
    </section>
  );
}
