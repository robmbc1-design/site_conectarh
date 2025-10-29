function Testimonials() {
  try {
    const [testimonials, setTestimonials] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      loadTestimonials();
    }, []);

    const loadTestimonials = async () => {
      try {
        const result = await trickleListObjects('testimonial', 100, true);
        const activeTestimonials = result.items
          .filter(item => item.objectData.IsActive === true)
          .map(item => ({
            name: item.objectData.Name,
            role: item.objectData.Role,
            company: item.objectData.Company,
            text: item.objectData.Text,
            avatar: item.objectData.Avatar
          }));
        setTestimonials(activeTestimonials);
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      return (
        <section id="depoimentos" className="py-16 bg-white" data-name="testimonials" data-file="components/Testimonials.js">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Depoimentos</h2>
            <div className="text-center text-[var(--secondary-color)]">Carregando depoimentos...</div>
          </div>
        </section>
      );
    }

    return (
      <section id="depoimentos" className="py-16 bg-white" data-name="testimonials" data-file="components/Testimonials.js">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[var(--bg-light)] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-[var(--text-dark)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--secondary-color)]">{testimonial.role} - {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-[var(--secondary-color)] italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Testimonials component error:', error);
    return null;
  }
}