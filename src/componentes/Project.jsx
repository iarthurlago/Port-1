import { useTranslation } from 'react-i18next';
import './Project.css';
import nasaCertificate from '../assets/nasa-space-apps-2026-certificate.png';

const projects = [
  {
    key: 'penguins',
    icon: 'fa-rocket',
    repository: 'https://github.com/laranjodupy/PinguinsNaLua_Nasa',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Gemini'],
    certificate: nasaCertificate,
  },
  {
    key: 'flame',
    icon: 'fa-fire',
    repository: 'https://github.com/iarthurlago/Flame-LabV0',
    stack: ['React', 'TypeScript', 'Vite', 'SVG'],
    video: '/videos/flame-lab.mp4',
    demo: 'https://projectflamelab.vercel.app/',
  },
  {
    key: 'margen',
    icon: 'fa-gem',
    repository: 'https://github.com/iarthurlago/margen-joias-landing',
    stack: ['React', 'TypeScript', 'CSS Modules', 'Sharp'],
    video: '/videos/margen-joias.mp4',
  },
  {
    key: 'rentals',
    icon: 'fa-desktop',
    repository: 'https://github.com/iarthurlago/ProjetoLocacao-WinFormCsharp',
    stack: ['C#', '.NET', 'Windows Forms', 'SQLite', 'BCrypt'],
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-subtitle">{t('projects.subtitle', '')}</p>

        <div className="skills-gridP">
          {projects.map((project) => (
            <article className="skill-category" key={project.key}>
              <div className="skill-header">
                <i className={`fas ${project.icon} skill-icon`} aria-hidden="true"></i>
                <h3 className="NameH">{t(`projects.${project.key}Title`)}</h3>
              </div>

              <div className="project-media">
                {project.certificate ? (
                  <figure className="project-certificate">
                    <a href={project.certificate} target="_blank" rel="noopener noreferrer" aria-label={t('projects.certificateLink')}>
                      <img src={project.certificate} alt={t('projects.certificateAlt')} loading="lazy" />
                    </a>
                    <figcaption>{t('projects.certificateCaption')}</figcaption>
                  </figure>
                ) : project.video ? (
                  <video className="project-video" controls preload="metadata" playsInline aria-label={t('projects.videoLabel', { name: t(`projects.${project.key}Title`) })}>
                    <source src={project.video} type="video/mp4" />
                    {t('projects.videoFallback')}
                  </video>
                ) : (
                <div className="project-placeholder">
                  <span className="project-badge">{t(`projects.${project.key}Category`)}</span>
                  <h4>{t(`projects.${project.key}Focus`)}</h4>
                </div>
                )}
              </div>

              <div className="about-text">
                <p>{t(`projects.${project.key}Desc`)}</p>
                {project.certificate && <p className="project-contribution">{t('projects.penguinsContribution')}</p>}
                {project.key === 'flame' && <p className="project-contribution">{t('projects.flameContribution')}</p>}
              </div>
              <ul className="project-stack" aria-label={t('projects.stackLabel')}>
                {project.stack.map((technology) => (
                  <li className="project-badge" key={technology}>{technology}</li>
                ))}
              </ul>
              <a
                className="contact-link project-link"
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('projects.repositoryLabel', { name: t(`projects.${project.key}Title`) })}
              >
                {t('projects.repository')} <i className="fas fa-external-link-alt" aria-hidden="true"></i>
              </a>
              {project.demo && <a className="contact-link project-link" href={project.demo} target="_blank" rel="noopener noreferrer">{t('projects.viewFinal')}</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
