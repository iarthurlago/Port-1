export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-subtitle">Aplicações e trabalhos recentes</p>

        <div className="skills-gridP">
          {/* Projeto Calculadora */}
          <div className="skill-category">
            <div className="skill-header">
              <i className="fas fa-calculator skill-icon"></i>
              <h3 className="NameH">Calculadora Estilizada</h3>
            </div>

            <div className="project-media">
              <video className="video-wrapper" src="MvCalc.mp4" autoPlay muted loop playsInline></video>
            </div>

            <div className="about-text">
              <p>Calculadora estilizada desenvolvida com JavaScript, HTML5 e CSS3.</p>
            </div>
          </div>

          {/* Projetos em Desenvolvimento */}
          <div className="skill-categoryMore">
            <div className="skill-headerMore">
              <h3 className="NameHMore">Novos Projetos em Desenvolvimento</h3>
            </div>

            <div className="about-textMore">
              <p>
                Atualmente focado na criação de ferramentas inteligentes e interfaces modernas em React.
                Em breve, novas soluções serão publicadas neste espaço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}