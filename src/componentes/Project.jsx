import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle', '')}</p>

        <div className="skills-gridP">
          <article className="skill-category">
            <div className="skill-header">
              <i className="fas fa-calculator skill-icon"></i>
              <h3 className="NameH">{t('projects.calculatorTitle')}</h3>
            </div>

            <div className="project-media">
              <div className="project-placeholder">
                <span className="project-badge">Preview</span>
                <h4>{t('projects.calculatorTitle')}</h4>
                <p>{t('projects.calculatorDesc')}</p>
              </div>
            </div>

            <div className="about-text">
              <p>{t('projects.calculatorDesc')}</p>
            </div>
          </article>

          <article className="skill-categoryMore">
            <div className="skill-headerMore">
              <h3 className="NameHMore">{t('projects.newProjectsTitle')}</h3>
            </div>

            <div className="about-textMore">
              <p>{t('projects.newProjectsDesc')}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}