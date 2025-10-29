function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-dark)] text-white py-8" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <div className="icon-users text-xl text-white"></div>
                </div>
                <span className="text-xl font-bold">Conecta RH</span>
              </div>
              <p className="text-gray-400">Conectando talentos, transformando negócios.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center"><span className="icon-mail text-lg mr-2"></span> contato@conectarh.com.br</p>
                <p className="flex items-center"><span className="icon-phone text-lg mr-2"></span> (11) 9999-9999</p>
                <p className="flex items-center"><span className="icon-map-pin text-lg mr-2"></span> São Paulo, SP</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                  <span className="icon-linkedin text-2xl"></span>
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                  <span className="icon-instagram text-2xl"></span>
                </a>
                <a href="#" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors">
                  <span className="icon-facebook text-2xl"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Conecta RH e Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}