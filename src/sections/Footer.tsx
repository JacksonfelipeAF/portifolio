export default function Footer() {
  return (
    <footer className="py-6 text-center bg-stone-800 text-stone-300 border-t border-stone-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-sm text-stone-500">
          {new Date().getFullYear()} Jackson Felipe - Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}
