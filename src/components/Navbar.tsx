import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detectar seção ativa
      const sections = ['home', 'sobre', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Início', icon: '🏠' },
    { id: 'sobre', label: 'Sobre', icon: '👤' },
    { id: 'projetos', label: 'Projetos', icon: '🚀' },
    { id: 'contato', label: 'Contato', icon: '📧' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-stone-200/90 backdrop-blur-md shadow-lg shadow-stone-400/20 border-b border-stone-300/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl animate-pulse">🌠</div>
            <span className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? 'text-stone-800' : 'text-stone-800'
            }`}>
              Jackson Felipe
            </span>
          </div>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-amber-400/20 text-amber-700 font-semibold shadow-md shadow-amber-400/20'
                    : scrolled
                    ? 'text-stone-700 hover:bg-stone-300/50 hover:text-stone-900'
                    : 'text-stone-700 hover:bg-stone-200/70 hover:text-stone-900'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg bg-stone-300/50 text-stone-700 hover:bg-stone-400/50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navegação Mobile (Hidden por enquanto) */}
        <div className="md:hidden mt-4 pb-4 border-t border-stone-300/50 hidden">
          <div className="flex flex-col gap-2 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-amber-400/20 text-amber-700 font-semibold'
                    : 'text-stone-700 hover:bg-stone-300/50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
