import { useTranslation } from 'react-i18next';

export default function ContateMe() {
  const { t } = useTranslation();

  const contactCards = [
    {
      title: t('contact.emailLabel'),
      value: 'iarthur.almeida@gmail.com',
      href: 'mailto:iarthur.almeida@gmail.com',
      label: t('contact.sendMsg'),
      icon: 'fas fa-envelope',
      iconType: 'fas',
    },
    {
      title: t('contact.whatsappLabel'),
      value: '+55 (79) 98857-1019',
      href: 'https://wa.link/dpscdw',
      label: t('contact.sendMsg'),
      icon: 'fab fa-whatsapp',
      iconType: 'fab',
    },
    {
      title: t('contact.linkedinLabel'),
      value: 'ivan-arthur',
      href: 'https://www.linkedin.com/in/iarthurlago-23b7603a1',
      label: t('contact.connect'),
      icon: 'fab fa-linkedin',
      iconType: 'fab',
    },
  ];

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

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