import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "" }) => {
  return (
    <motion.section
      className={`min-h-screen flex items-center justify-center px-6 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

interface CardProps {
  title: string;
  description?: string;
  techs?: string[];
  link?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  description = "Sistema web completo e funcional.", 
  techs = ["React", "Node.js"], 
  link = "#",
  delay = 0 
}) => {
  return (
    <motion.div
      className="bg-stone-100/80 backdrop-blur-sm rounded-2xl border border-stone-300 p-6 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <h3 className="text-xl font-bold text-stone-800 mb-3">{title}</h3>
      <p className="text-stone-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-stone-200/50 rounded-md text-xs text-stone-600 border border-stone-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="block w-full text-center bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
      >
        Ver Projeto
      </a>
    </motion.div>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, isActive = false }) => {
  return (
    <motion.a
      href={href}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-amber-600 text-white shadow-lg shadow-amber-400/30' 
          : 'text-stone-600 hover:text-stone-800 hover:bg-stone-200'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

interface TechCardProps {
  nome: string;
  icone: string;
  nivel: number;
  delay?: number;
}

export const TechCard: React.FC<TechCardProps> = ({ nome, icone, nivel, delay = 0 }) => {
  return (
    <motion.div
      className="bg-stone-100/80 backdrop-blur-sm p-6 rounded-xl border border-stone-300 hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="text-3xl mb-3">{icone}</div>
      <div className="font-semibold text-stone-800 mb-1">{nome}</div>
      <div className="w-full bg-stone-300 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${nivel}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      <div className="text-xs text-stone-600 mt-1">{nivel}%</div>
    </motion.div>
  );
};
