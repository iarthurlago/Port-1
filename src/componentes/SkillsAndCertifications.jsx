import { useTranslation } from 'react-i18next';

export default function SkillsAndCertifications() {
  const { t } = useTranslation();

  const skillGroups = [
    {
      title: t('skills.webDev'),
      items: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 70 },
        { name: 'JavaScript', level: 70 },
      ],
    },
    {
      title: t('skills.dataAnalyst'),
      items: [
        { name: 'SQL', level: 75 },
        { name: t('skills.systemsModeling'), level: 80 },
        
      ],
    },
    {
      title: 'Backend Languages',
      items: [
        { name: 'JS', level: 80}, 
        {name: 'TypeScript', level: 60}, 
        { name: 'C#', level: 50 } 
      ],
    },
  ];

  const qualifications = [
    {
      title: t('qualifications.techDegree'),
      period: t('qualifications.techStatus'),
    },
    {
      title: t('qualifications.jovemTech'),
      period: t('qualifications.jovemTechStatus'),
    },
    {
      title: t('qualifications.education'),
      period: 'Ensino Superior — Cursando',
    },
  ];

  return (
    <section id="skills-qualifications" className="section bg-light skills-section zoom-75">
      <div className="container skills-inner">
        <h2 className="section-title">{t('skills.title')}</h2>
        <p className="section-subtitle">{t('skills.subtitle')}</p>

        <div className="side-by-side-grid">
          <div className="column-left">
            <h3 className="column-title">
              <i className="fas fa-code"></i> {t('skills.technicalTitle')}
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
              <i className="fas fa-graduation-cap"></i> {t('skills.qualificationsTitle')}
            </h3>

            <div className="education-card">
              <div className="timeline">
                {qualifications.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p className="timeline-text">{item.period}</p>
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