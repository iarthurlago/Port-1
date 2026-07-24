const contactCards = [
  {
    title: 'Email',
    value: 'iarthur.almeida@gmail.com',
    href: 'mailto:iarthur.almeida@gmail.com',
    label: 'Enviar mensagem',
    icon: 'fas fa-envelope',
    iconType: 'fas',
  },
  {
    title: 'WhatsApp',
    value: '+55 (79) 98857-1019',
    href: 'https://wa.link/dpscdw',
    label: 'Enviar mensagem',
    icon: 'fab fa-whatsapp',
    iconType: 'fab',
  },
  {
    title: 'LinkedIn',
    value: 'ivan-arthur',
    href: 'https://www.linkedin.com/in/iarthurlago-23b7603a1',
    label: 'Conectar',
    icon: 'fab fa-linkedin',
    iconType: 'fab',
  },
];

export default function ContateMe() {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Contate-me</h2>
        <p className="section-subtitle">Entre em contato para oportunidades</p>

        <div className="contact-container">
          <div className="contact-info">
            {contactCards.map((card) => (
              <div className="contact-card" key={card.title}>
                <i className={`${card.icon} contact-icon`}></i>
                <h3>{card.title}</h3>
                <p>{card.value}</p>
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {card.label} <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}