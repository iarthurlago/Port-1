import { useState, type CSSProperties } from 'react'
import { Icon } from './Icons'
import { mockProfile } from '../data/mock'

const certificates = [
  { id: '01', title: 'Credential / Exploration', image: '/assets/certificate-01.png' },
  { id: '02', title: 'Credential / Engineering', image: '/assets/certificate-02.jpg' },
  { id: '03', title: 'Credential / Development', image: '/assets/certificate-03.jpg' },
]

const toolGroups = [
  { title: 'Product Engineering', tools: ['React', 'TypeScript', 'Design Systems', 'Motion'] },
  { title: 'Backend & Data', tools: ['Node.js', 'APIs', 'PostgreSQL', 'Cloud'] },
  { title: 'AI & Data', tools: ['Python', 'Prompt Design', 'Data Modeling'] },
  { title: 'Engineering Tools', tools: ['Git', 'Figma', 'Testing', 'CI/CD'] },
]

const email = 'hello@example.dev'

export function ProfilePage({ goHome }: { goHome: () => void }) {
  const [activeCertificate, setActiveCertificate] = useState(1)
  const [openExperience, setOpenExperience] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch { setCopied(false) }
  }

  return <main className="dashboard glass profile-page">
    <div className="profile-page-nav"><button onClick={goHome}><Icon name="arrowLeft" size={16} /> Home</button><span>PROFILE / 2026</span></div>

    <section className="profile-intro" aria-labelledby="profile-name">
      <div className="profile-intro-copy"><span className="profile-overline"><i /> {mockProfile.availability}</span><p className="profile-section-index">01 / ABOUT</p><h1 id="profile-name">Hello, I'm<br /><em>{mockProfile.displayName}.</em></h1><p className="profile-lede">{mockProfile.about}</p><p className="profile-location">{mockProfile.location}</p><button className="profile-primary" type="button"><Icon name="download" size={17} /> Download Resume <Icon name="arrowUpRight" size={16} /></button></div>
      <div className="profile-photo-frame"><img src="/assets/profile-photo.jpeg" alt="Foto de perfil" /><span className="photo-caption">CREATIVE DEVELOPER / 01</span></div>
    </section>

    <section className="profile-section" aria-labelledby="experience-title"><div className="profile-section-heading"><span>02 / EXPERIENCE</span><h2 id="experience-title">Experience<span className="heading-dot">.</span></h2><p>Uma trajetória de construção e aprendizado contínuo.</p></div><div className="experience-list">{mockProfile.experience.map((item, index) => <div className={`experience-item${openExperience === index ? ' is-open' : ''}`} key={item.company}><button aria-expanded={openExperience === index} onClick={() => setOpenExperience(openExperience === index ? null : index)}><span className="experience-number">0{index + 1}</span><span className="experience-role"><strong>{item.role}</strong><small>{item.company}</small></span><span className="experience-period">{item.period}</span><span className="experience-plus">{openExperience === index ? '−' : '+'}</span></button>{openExperience === index && <p>Projetos digitais, colaboração entre áreas e interfaces feitas para pessoas.</p>}</div>)}</div></section>

    <section className="profile-section certificates-section" aria-labelledby="certificates-title"><div className="profile-section-heading"><span>03 / CERTIFICATES</span><h2 id="certificates-title">Always learning<span className="heading-dot">.</span></h2><p>Uma seleção visual de certificados e formações.</p></div><div className="certificate-deck" onMouseLeave={() => setActiveCertificate(1)}>{certificates.map((certificate, index) => <button className={`certificate-card${activeCertificate === index ? ' is-active' : ''}`} key={certificate.id} style={{ '--card-index': index, '--deck-shift': `${index < activeCertificate ? -28 : index > activeCertificate ? 28 : 0}px` } as CSSProperties} onMouseEnter={() => setActiveCertificate(index)} onFocus={() => setActiveCertificate(index)} onClick={() => setActiveCertificate(index)} aria-label={certificate.title}><img src={certificate.image} alt={`Certificado ${certificate.id}`} /></button>)}</div><div className="certificate-title" aria-live="polite"><span>{certificates[activeCertificate].id} / 03</span><strong>{certificates[activeCertificate].title}</strong></div></section>

    <section className="profile-section" aria-labelledby="stack-title"><div className="profile-section-heading"><span>04 / STACK & TOOLS</span><h2 id="stack-title">Tools for ideas<span className="heading-dot">.</span></h2><p>Uma amostra mockada das ferramentas que compõem o processo.</p></div><div className="tool-grid">{toolGroups.map(group => <div className="tool-card glass" key={group.title}><h3>{group.title}</h3><div>{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div>)}</div></section>

    <section className="contact-section glass" aria-labelledby="contact-title"><span className="contact-index">05 / CONTACT</span><h2 id="contact-title">Let's Work<br /><em>Together.</em></h2><p>Tem uma ideia ou oportunidade em mente? Vamos conversar sobre o próximo projeto.</p><div className="contact-email">{email}</div><div className="contact-actions"><button onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={17} /> {copied ? 'Copied' : 'Copy email'}</button><button><Icon name="download" size={17} /> Download Resume</button></div><div className="contact-socials">{['LinkedIn', 'GitHub', 'Instagram'].map(name => <button key={name}>{name} <Icon name="arrowUpRight" size={14} /></button>)}</div></section>
  </main>
}
