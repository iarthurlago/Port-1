import profileImage from '../assets/hero.png';

const socialLinks = [
  {
    href: 'https://www.instagram.com/iarthurlago/?next=%2F',
    icon: 'fab fa-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://wa.link/dpscdw',
    icon: 'fab fa-whatsapp',
    label: 'WhatsApp',
  },
];

export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>Eu sou Ivan Arthur</h1>
          <p className="hero-age">17 anos | Dev</p>
          <h2>Estudante de Programação</h2>

          <p className="hero-text">
            Apresento a seguir uma seleção dos meus projetos pessoais, desenvolvidos com dedicação e empenho.
          </p>

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
                <i className={link.icon}></i>
              </a>
            ))}
            <a href="#contact" className="btn-primary">Meu Contato</a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Ivan Arthur" className="profile-img" />
        </div>
      </div>
    </header>
  );
}