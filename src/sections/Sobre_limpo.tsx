import { useState } from 'react';

interface Tecnologia {
  nome: string;
  icone: string;
  categoria: string;
  descricao: string;
  uso: string;
}

export default function Sobre() {
  const [selectedTech, setSelectedTech] = useState<Tecnologia | null>(null);

  const tecnologias = [
    { nome: "React", icone: "⚛️", categoria: "Frontend", descricao: "Biblioteca JavaScript para criar interfaces de usuário interativas e reativas.", uso: "Componentes reutilizáveis, estado global, hooks" },
    { nome: "TypeScript", icone: "📘", categoria: "Frontend", descricao: "Superset do JavaScript que adiciona tipagem estática para código mais seguro.", uso: "Interfaces, tipos customizados, generics" },
    { nome: "JavaScript", icone: "🟨", categoria: "Frontend", descricao: "Linguagem de programação essencial para desenvolvimento web moderno.", uso: "DOM manipulation, APIs, ES6+, async/await" },
    { nome: "HTML", icone: "🌐", categoria: "Frontend", descricao: "Estrutura fundamental para criar conteúdo web semântico.", uso: "Semantic HTML5, forms, accessibility" },
    { nome: "CSS", icone: "🎨", categoria: "Frontend", descricao: "Estilização e design visual para páginas web.", uso: "Flexbox, Grid, animations, responsive design" },
    { nome: "Tailwind CSS", icone: "🎯", categoria: "Frontend", descricao: "Framework CSS utility-first para estilização rápida e consistente.", uso: "Design responsivo, temas customizados, componentes" },
    { nome: "Vite", icone: "⚡", categoria: "Frontend", descricao: "Build tool extremamente rápido para desenvolvimento web moderno.", uso: "Hot reload, otimização de build, plugins" },
    { nome: "Next.js", icone: "▲", categoria: "Frontend", descricao: "Framework React com renderização server-side e estática.", uso: "SSR, SSG, API routes, otimização automática" },
    { nome: "Vue.js", icone: "💚", categoria: "Frontend", descricao: "Framework progressivo JavaScript para construir interfaces de usuário.", uso: "Componentes, reatividade, Vue Router" },
    { nome: "Vuetify", icone: "🔷", categoria: "Frontend", descricao: "Biblioteca de componentes UI para Vue.js baseada em Material Design.", uso: "Grid system, formulários, temas" },
    { nome: "Node.js", icone: "🟢", categoria: "Backend", descricao: "Runtime JavaScript para executar código no servidor.", uso: "APIs REST, microserviços, streaming" },
    { nome: "NestJS", icone: "🏗️", categoria: "Backend", descricao: "Framework TypeScript para construir aplicações server-side escaláveis.", uso: "Modules, decorators, dependency injection, microservices" },
    { nome: "Express.js", icone: "🚂", categoria: "Backend", descricao: "Framework minimalista para criar APIs e aplicações web no Node.js.", uso: "Rotas, middleware, autenticação" },
    { nome: "GraphQL", icone: "◈", categoria: "Backend", descricao: "Linguagem de query para APIs mais eficientes e flexíveis.", uso: "Schema, resolvers, subscriptions, Apollo Client" },
    { nome: "MongoDB", icone: "🍃", categoria: "Backend", descricao: "Banco de dados NoSQL orientado a documentos.", uso: "CRUD, agregação, indexes" },
    { nome: "Mongoose", icone: "🔗", categoria: "Backend", descricao: "ODM para MongoDB e Node.js com schema validation.", uso: "Models, schemas, population" },
    { nome: "PostgreSQL", icone: "🐘", categoria: "Backend", descricao: "Banco de dados relacional poderoso e extensível.", uso: "ACID, indexes, JSONB, window functions" },
    { nome: "bcrypt", icone: "🔒", categoria: "Backend", descricao: "Biblioteca para hashing de senhas de forma segura.", uso: "Hashing, salt, comparação de senhas" },
    { nome: "Docker", icone: "🐳", categoria: "DevOps", descricao: "Plataforma para containerização de aplicações.", uso: "Containers, Docker Compose, orquestração" },
    { nome: "Git", icone: "📚", categoria: "DevOps", descricao: "Sistema de controle de versão distribuído.", uso: "Branches, merges, pull requests, CI/CD" },
    { nome: "nodemailer", icone: "📧", categoria: "Backend", descricao: "Módulo para enviar emails a partir de aplicações Node.js.", uso: "Templates, anexos, SMTP" },
    { nome: "cors", icone: "🌐", categoria: "Backend", descricao: "Middleware para habilitar CORS em APIs Express.", uso: "Origins permitidas, headers customizados" },
    { nome: "dotenv", icone: "🔧", categoria: "Backend", descricao: "Módulo para gerenciar variáveis de ambiente.", uso: "Configuração, secrets, ambiente" },
    { nome: "APIs REST", icone: "🔌", categoria: "Backend", descricao: "Arquitetura para criar APIs escaláveis e padronizadas.", uso: "CRUD, status codes, versionamento" },
  ];

  const stats = [
    { numero: "5+", label: "Projetos Completos", icon: "🚀" },
    { numero: "2+", label: "Anos de Experiência", icon: "💼" },
    { numero: "23+", label: "Tecnologias Dominadas", icon: "🛠️" },
  ];

  return (
    <section className="py-24 px-6 relative scroll-snap-start">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-stone-800 via-amber-700 to-stone-800 bg-clip-text text-transparent animate-gradient bg-size-200 opacity-0 animate-fade-in-delay-1">
          Sobre mim
        </h2>

        <p className="max-w-3xl mx-auto text-stone-700 mb-16 text-lg text-center leading-relaxed opacity-0 animate-fade-in-delay-1">
          Sou desenvolvedor focado em criar soluções reais. Já desenvolvi
          sistemas completos com autenticação, dashboards e envio automático de
          relatórios. Meu objetivo é transformar ideias em aplicações funcionais
          e eficientes.
        </p>

        {/* Estatísticas animadas */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-stone-100/80 backdrop-blur-sm rounded-xl border border-stone-300 hover:border-amber-500 transition-all hover:scale-105 opacity-0 animate-fade-in-delay-2 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2 group-hover:scale-110 transition-transform">
                {stat.icon} {stat.numero}
              </div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tecnologias em formato de cometa com efeitos avançados */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-stone-800 via-amber-700 to-stone-800 bg-clip-text text-transparent animate-gradient bg-size-200 opacity-0 animate-fade-in-delay-3">
            Tecnologias e Frameworks que uso
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-0 max-w-4xl mx-auto relative">
            {tecnologias.map((tech, i) => (
              <div
                key={i}
                className="group relative comet-container"
                style={{
                  animation: `float-comet ${8 + (i % 3) * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {/* Efeito de rastro/cauda dinâmico */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-400/30 to-transparent transform skew-x-12 scale-x-150 origin-left opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
                
                {/* Efeito de aura multidirecional */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-300/20 via-transparent to-stone-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                
                {/* Efeito de campo de força */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card principal em formato de hexágono/cometa */}
                <div
                  className="comet-glow relative bg-gradient-to-br from-stone-200/80 to-stone-300/60 backdrop-blur-sm p-2 transform hover:scale-115 hover:rotate-12 transition-all duration-500 opacity-0 animate-fade-in-delay-4 cursor-pointer overflow-hidden border border-stone-400/20 hover:border-amber-500/40"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    aspectRatio: '1',
                  }}
                  onClick={() => setSelectedTech(tech)}
                >
                  {/* Efeito de partículas avançado */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping shadow-amber-400"></div>
                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-stone-400 rounded-full animate-ping animation-delay-300 shadow-stone-400"></div>
                    <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-amber-300 rounded-full animate-pulse animation-delay-500"></div>
                  </div>
                  
                  {/* Efeito de núcleo energético */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-amber-400/10 rounded-full blur-md group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
                    <div className="text-lg mb-1 group-hover:scale-125 transition-transform group-hover:text-amber-600">
                      {tech.icone}
                    </div>
                    <div className="text-xs font-bold text-stone-800 leading-tight group-hover:text-stone-900">
                      {tech.nome}
                    </div>
                    <div className="text-xs text-stone-500 mt-1">
                      {tech.categoria}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção deste projeto simplificada */}
        <div className="bg-gradient-to-br from-amber-100/50 via-stone-200/50 to-amber-200/50 p-8 rounded-2xl border border-amber-300/50 shadow-xl opacity-0 animate-fade-in-delay-5">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-stone-800 via-amber-700 to-stone-800 bg-clip-text text-transparent animate-gradient bg-size-200">
            Este Portfolio
          </h3>
          
          <p className="text-center text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed text-lg">
            Uma jornada digital que transforma código em arte. Este portfolio representa 
            a evolução constante no desenvolvimento web, combinando design inovador 
            com performance excepcional. Cada elemento foi cuidadosamente criado 
            para proporcionar uma experiência única e memorável.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nome: "React", icone: "⚛️", desc: "Estrutura reativa e modular" },
              { nome: "TypeScript", icone: "📘", desc: "Tipagem segura e robusta" },
              { nome: "Tailwind CSS", icone: "🎯", desc: "Design system moderno" },
              { nome: "Vite", icone: "⚡", desc: "Performance ultrarrápida" },
            ].map((tech, i) => (
              <div
                key={i}
                className="p-6 text-center transition-all duration-300 cursor-pointer hover:bg-stone-200/70 hover:shadow-lg rounded-xl"
              >
                <div className="text-2xl mb-3 animate-float-icon" style={{ animationDelay: `${i * 0.3}s` }}>
                  {tech.icone}
                </div>
                <div className="text-sm font-semibold text-stone-800">
                  {tech.nome}
                </div>
                <div className="text-xs text-stone-500 mt-2">
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal de apresentação da tecnologia */}
        {selectedTech && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedTech(null)}
          >
            <div
              className="bg-stone-100 rounded-2xl p-8 max-w-md w-full border border-stone-300 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{selectedTech.icone}</div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-800">
                      {selectedTech.nome}
                    </h4>
                    <div className="text-sm text-stone-500">
                      {selectedTech.categoria}
                    </div>
                  </div>
                </div>
                <button
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                  onClick={() => setSelectedTech(null)}
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-stone-700 mb-2">
                    Descrição
                  </h5>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {selectedTech.descricao}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-stone-700 mb-2">
                    Como uso
                  </h5>
                  <p className="text-stone-600 text-sm">{selectedTech.uso}</p>
                </div>
              </div>
            </div>
          </div>
        )}

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
          .animate-fade-in-delay-4 { animation: fade-in 0.8s ease-out 0.8s forwards; opacity: 0; }
          .animate-fade-in-delay-5 { animation: fade-in 0.8s ease-out 1s forwards; opacity: 0; }
          
          .animation-delay-300 { animation-delay: 300ms; }
          .animation-delay-500 { animation-delay: 500ms; }
          
          @keyframes float-comet {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg);
              filter: brightness(1);
            }
            25% { 
              transform: translateY(-3px) translateX(2px) rotate(1deg);
              filter: brightness(1.1);
            }
            50% { 
              transform: translateY(-5px) translateX(-1px) rotate(-1deg);
              filter: brightness(1.2);
            }
            75% { 
              transform: translateY(-2px) translateX(-3px) rotate(0.5deg);
              filter: brightness(1.1);
            }
          }
          
          @keyframes float-icon {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.6;
            }
            25% { 
              transform: translateY(-2px) rotate(2deg);
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-3px) rotate(-1deg);
              opacity: 0.8;
            }
            75% { 
              transform: translateY(-1px) rotate(1deg);
              opacity: 0.7;
            }
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-gradient {
            animation: gradient 3s ease-in-out infinite;
          }
          
          .bg-size-200 {
            background-size: 200% 200%;
          }
          
          .animate-float-icon {
            animation: float-icon 4s ease-in-out infinite;
          }
          
          @keyframes comet-glow {
            0%, 100% { 
              box-shadow: 0 0 8px rgba(251, 191, 36, 0.4), 
                        0 0 16px rgba(251, 191, 36, 0.3),
                        0 0 24px rgba(251, 191, 36, 0.2),
                        inset 0 0 12px rgba(251, 191, 36, 0.15);
            }
            50% { 
              box-shadow: 0 0 16px rgba(251, 191, 36, 0.6), 
                        0 0 32px rgba(251, 191, 36, 0.4),
                        0 0 48px rgba(251, 191, 36, 0.3),
                        inset 0 0 20px rgba(251, 191, 36, 0.25);
            }
          }
          
          .group:hover .comet-glow {
            animation: comet-glow 2s ease-in-out infinite;
          }
          
          .comet-container:hover ~ .comet-container {
            animation: float-comet 0.5s ease-in-out;
          }
        `}</style>
    </section>
  );
}
