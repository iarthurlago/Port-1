import profileImage from '../assets/FormCvEu.jpeg';
import instagramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    href: 'https://www.instagram.com/iarthurlago/?next=%2F',
    icon: instagramIcon,
    label: 'Instagram',
  },
  {
    href: 'https://wa.link/dpscdw',
    icon: whatsappIcon,
    label: 'WhatsApp',
  },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="hero-age">{t('hero.subtitle')}</p>
          <h2>{t('hero.role')}</h2>

          <p className="hero-text">{t('hero.description')}</p>

          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <img src={link.icon} alt={link.label} className="social-icon" />
              </a>
            ))}
            <a href="#contact" className="btn-primary">{t('hero.contactBtn')}</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Ivan Arthur" className="profile-img" />
        </div>
      </div>
    </header>
  );
}