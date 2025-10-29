function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contato');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-[var(--bg-light)] to-white" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
                Conectando Talentos, Transformando Negócios
              </h1>
              <p className="text-lg text-[var(--secondary-color)] mb-6">
                Soluções completas em gestão de recursos humanos para empresas que buscam excelência em suas equipes.
              </p>
              <button onClick={scrollToContact} className="btn-primary">
                Entre em Contato
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Equipe colaborativa"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}