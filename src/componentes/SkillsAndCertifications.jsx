const skillGroups = [
  {
    title: 'Desenvolvimento Web',
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 70 },
      { name: 'JavaScript', level: 70 },
    ],
  },
  {
    title: 'Banco de Dados & Dados',
    items: [
      { name: 'SQL', level: 75 },
      { name: 'Modelagem de Sistemas', level: 80 },
    ],
  },
  {
    title: 'Linguagens Backend',
    items: [{ name: 'C#', level: 50 }],
  },
];

const qualifications = [
  {
    title: 'Técnico em Desenvolvimento de Sistemas + Ensino Médio Completo',
    period: 'SESI-SENAI — Finalizado',
  },
  {
    title: 'Programa Jovem Tech',
    period: 'Inovase — Em andamento',
    detail: 'Módulos de T.I, Empreendedorismo e Certificação de Programador Júnior.',
    link: 'edital_programa_jovem_tech_FluxoContínuo_2025.pdf',
  },
  {
    title: 'Engenharia de Software / Ciência da Computação',
    period: 'Ensino Superior — Cursando',
  },
];

export default function SkillsAndCertifications() {
  return (
    <section id="skills-qualifications" className="section bg-light skills-section zoom-75">
      <div className="container skills-inner">
        <h2 className="section-title">Habilidades & Qualificações</h2>
        <p className="section-subtitle">Meu nível técnico e jornada de aprendizado</p>

        <div className="side-by-side-grid">
          <div className="column-left">
            <h3 className="column-title">
              <i className="fas fa-code"></i> Habilidades Técnicas
            </h3>

            <div className="skills-stack">
              {skillGroups.map((group) => (
                <div className="skill-category" key={group.title}>
                  <h4 className="NameH">{group.title}</h4>
                  {group.items.map((item) => (
                    <div className="skill-item" key={item.name}>
                      <div className="skill-info">
                        <span>{item.name}</span>
                        <span className="porcentagem">{item.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${item.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="column-right">
            <h3 className="column-title">
              <i className="fas fa-graduation-cap"></i> Qualificações & Cursos
            </h3>

            <div className="education-card">
              <div className="timeline">
                {qualifications.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p className="timeline-text">{item.period}</p>
                    {item.detail ? <p className="sub-detail">{item.detail}</p> : null}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="edital-link"
                      >
                        Ver Edital
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}