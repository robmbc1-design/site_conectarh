function Services() {
  try {
    const services = [
      {
        icon: 'search',
        title: 'Recrutamento e Seleção',
        description: 'Encontramos os melhores talentos para sua empresa através de processos estruturados e eficientes.'
      },
      {
        icon: 'trending-up',
        title: 'Gestão de Desempenho',
        description: 'Desenvolvemos sistemas de avaliação que impulsionam resultados e engajamento.'
      },
      {
        icon: 'graduation-cap',
        title: 'Treinamento e Desenvolvimento',
        description: 'Programas customizados para capacitação e crescimento profissional das equipes.'
      },
      {
        icon: 'file-text',
        title: 'Consultoria em RH',
        description: 'Assessoria estratégica para otimizar processos e políticas de recursos humanos.'
      },
      {
        icon: 'users',
        title: 'Clima Organizacional',
        description: 'Pesquisas e ações para melhorar o ambiente de trabalho e satisfação dos colaboradores.'
      },
      {
        icon: 'briefcase',
        title: 'Terceirização de RH',
        description: 'Gestão completa dos processos de RH, permitindo foco no core business da empresa.'
      }
    ];

    return (
      <section id="servicos" className="py-16 bg-white" data-name="services" data-file="components/Services.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-[var(--bg-light)] rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-[var(--primary-color)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                  <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--text-dark)]">{service.title}</h3>
                <p className="text-[var(--secondary-color)]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Services component error:', error);
    return null;
  }
}