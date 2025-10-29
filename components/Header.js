function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    };

    return (
      <header className="bg-white shadow-md fixed w-full top-0 z-50" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-users text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--primary-color)]">Conecta RH</span>
            </div>

            <button 
              className="md:hidden text-[var(--secondary-color)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl`}></div>
            </button>

            <ul className="hidden md:flex space-x-8">
              <li><a onClick={() => scrollToSection('home')} className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-colors">Início</a></li>
              <li><a onClick={() => scrollToSection('servicos')} className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-colors">Serviços</a></li>
              <li><a onClick={() => scrollToSection('portfolio')} className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-colors">Portfólio</a></li>
              <li><a onClick={() => scrollToSection('depoimentos')} className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-colors">Depoimentos</a></li>
              <li><a onClick={() => scrollToSection('contato')} className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer transition-colors">Contato</a></li>
            </ul>
          </div>

          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-3">
              <li><a onClick={() => scrollToSection('home')} className="block text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer">Início</a></li>
              <li><a onClick={() => scrollToSection('servicos')} className="block text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer">Serviços</a></li>
              <li><a onClick={() => scrollToSection('portfolio')} className="block text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer">Portfólio</a></li>
              <li><a onClick={() => scrollToSection('depoimentos')} className="block text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer">Depoimentos</a></li>
              <li><a onClick={() => scrollToSection('contato')} className="block text-[var(--secondary-color)] hover:text-[var(--primary-color)] cursor-pointer">Contato</a></li>
            </ul>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}