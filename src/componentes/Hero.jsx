export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Eu sou Ivan Arthur <h3>17 anos | Dev</h3></h1>
          <h2>Estudante de Programação</h2> 
          
          <p className="hero-text">
            Apresento a seguir uma seleção dos meus projetos pessoais, desenvolvidos com
            dedicação e empenho.
          </p>

          <div className="social-links">
            <a href="https://www.instagram.com/iarthurlago/?next=%2F" className="social-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.link/dpscdw" className="social-btn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#contact" className="btn-primary">Meu Contato</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="fotoP1.jpeg" alt="Ivan Arthur" className="profile-img" />
        </div>
      </div>
    </header>
  );
}