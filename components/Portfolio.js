function Portfolio() {
  try {
    const cases = [
      {
        company: 'Tech Solutions',
        description: 'Implementação de sistema de avaliação de desempenho',
        result: '35% de aumento na produtividade',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop'
      },
      {
        company: 'Varejo Express',
        description: 'Recrutamento e seleção de 50+ colaboradores',
        result: '90% de retenção após 1 ano',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop'
      },
      {
        company: 'Indústria Plus',
        description: 'Programa de capacitação de lideranças',
        result: '40% de melhoria no clima organizacional',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop'
      }
    ];

    return (
      <section id="portfolio" className="py-16 bg-[var(--bg-light)]" data-name="portfolio" data-file="components/Portfolio.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={item.image} alt={item.company} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-dark)]">{item.company}</h3>
                  <p className="text-[var(--secondary-color)] mb-3">{item.description}</p>
                  <div className="flex items-center text-[var(--primary-color)] font-semibold">
                    <div className="icon-check-circle text-lg mr-2"></div>
                    <span>{item.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Portfolio component error:', error);
    return null;
  }
}