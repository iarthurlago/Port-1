export default function SkillsAndCertifications() {
  return (
    <section id="skills-qualifications" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Habilidades & Qualificações</h2>
        <p className="section-subtitle">Meu nível técnico e jornada de aprendizado</p>

        {/* Container principal dividindo a tela em 2 colunas */}
        <div className="side-by-side-grid">
          
          {/* ESQUERDA: Habilidades */}
          <div className="column-left">
            <h3 className="column-title"><i className="fas fa-code"></i> Habilidades Técnicas</h3>
            
            <div className="skills-stack">
              {/* Desenvolvedor Web */}
              <div className="skill-category">
                <h4 className="NameH">Desenvolvimento Web</h4>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>HTML</span>
                    <span className="porcentagem">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span>CSS</span>
                    <span className="porcentagem">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span>JavaScript</span>
                    <span className="porcentagem">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              {/* Analista de Informações */}
              <div className="skill-category">
                <h4 className="NameH">Banco de Dados & Dados</h4>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>SQL</span>
                    <span className="porcentagem">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span>Modelagem de Sistemas</span>
                    <span className="porcentagem">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>

              {/* Linguagens */}
              <div className="skill-category">
                <h4 className="NameH">Linguagens Backend</h4>
                <div className="skill-item">
                  <div className="skill-info">
                    <span>C#</span>
                    <span className="porcentagem">50%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA: Certificações e Educação */}
          <div className="column-right">
            <h3 className="column-title"><i className="fas fa-graduation-cap"></i> Qualificações & Cursos</h3>
            
            <div className="education-card">
              <div className="timeline">
                
                <div className="timeline-item">
                  <h4>Técnico em Desenvolvimento de Sistemas + Ensino Médio Completo</h4>
                  <p className="timeline-text">SESI-SENAI — Finalizado</p>
                </div>
                
                <div className="timeline-item">
                  <h4>Programa Jovem Tech</h4>
                  <p className="timeline-text">Inovase — Em andamento</p>
                  <p className="sub-detail">Módulos de T.I, Empreendedorismo e Certificação de Programador Júnior.</p>
                  <a href="edital_programa_jovem_tech_FluxoContínuo_2025.pdf" target="_blank" rel="noopener noreferrer" className="edital-link">
                    Ver Edital
                  </a>
                </div>

                <div className="timeline-item">
                  <h4>Engenharia de Software / Ciência da Computação</h4>
                  <p className="timeline-text">Ensino Superior — Cursando</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}