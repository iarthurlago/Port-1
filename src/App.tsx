import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { CustomCursor } from './components/CustomCursor'
import { Icon } from './components/Icons'
import { ProfilePage } from './components/ProfilePage'
import { SearchOverlay } from './components/SearchOverlay'
import { mockProfile, mockProjects, moreCategories, primaryCategories, type Project } from './data/mock'

type View = 'home' | 'profile'
const domain = 'alexmorgan.dev'
const profilePhoto = '/assets/profile-photo.jpeg'

function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  return <div className={`project-art art-${project.art} ${className}`} aria-hidden="true"><div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" /><div className="art-glow" /><span className="art-mark">{project.monogram}</span><span className="art-index">{project.id.toUpperCase()} / {project.year}</span></div>
}

function BrowserBar({ view }: { view: View }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(`${domain}${view === 'profile' ? '/profile' : ''}`); setCopied(true); window.setTimeout(() => setCopied(false), 1800) } catch { setCopied(false) } }
  return <header className="browser-bar" aria-label="Barra do navegador"><span className="browser-small-icon" aria-hidden="true">▣</span><div className="browser-arrows"><button aria-label="Voltar" title="Voltar" onClick={() => history.back()}><Icon name="arrowLeft" size={15} /></button><button aria-label="Avançar" title="Avançar" onClick={() => history.forward()}><Icon name="arrowRight" size={15} /></button></div><div className="address-field"><span className="address-lock">◆</span><span>{domain}{view === 'profile' ? '/profile' : ''}</span></div><button className="browser-action" onClick={() => location.reload()} aria-label="Recarregar página" title="Recarregar"><Icon name="refresh" size={15} /></button><button className="browser-action" onClick={copy} aria-label={copied ? 'Domínio copiado' : 'Copiar domínio'} title={copied ? 'Copiado' : 'Copiar domínio'}><Icon name={copied ? 'check' : 'copy'} size={15} /></button>{copied && <span className="copy-feedback" role="status">Copiado</span>}</header>
}

function Sidebar({ view, navigate, openSettings }: { view: View; navigate: (view: View) => void; openSettings: () => void }) {
  return <nav className="sidebar glass" aria-label="Navegação principal"><button className={`side-button ${view === 'home' ? 'selected' : ''}`} aria-label="Início" title="Início" onClick={() => navigate('home')}><Icon name="home" size={19} /></button><button className="side-button" aria-label="Curtir portfólio" title="Curtir portfólio"><Icon name="heart" size={18} /><span className="like-count">0</span></button><button className={`side-button ${view === 'profile' ? 'selected' : ''}`} aria-label="Abrir perfil" title="Perfil" onClick={() => navigate('profile')}><Icon name="user" size={18} /></button><button className="side-button" aria-label="Abrir configurações" title="Configurações" onClick={openSettings}><Icon name="settings" size={18} /></button></nav>
}

function ProjectCard({ project, compact = false, progress = false }: { project: Project; compact?: boolean; progress?: boolean }) {
  if (compact) return <article className="compact-card"><ProjectArt project={project} className="compact-art" /><div className="compact-copy"><h3>{project.title}</h3><p>{project.category}</p>{progress && <div className="progress-track"><span style={{ width: `${project.historyProgress ?? 0}%` }} /></div>}</div><button className="round-play" aria-label={`Prévia de ${project.title}`}><Icon name="play" size={12} fill="currentColor" /></button></article>
  return <article className="poster-card"><ProjectArt project={project} /><div className="poster-shade" /><div className="poster-content"><span className="poster-badge">{project.category}</span><div className="poster-bottom"><div><h3>{project.title}</h3><p>{project.description}</p></div><button className="round-play light" aria-label={`Prévia de ${project.title}`}><Icon name="play" size={13} fill="currentColor" /></button></div></div></article>
}

function Rail({ title, projects, compact = false, progress = false }: { title: string; projects: Project[]; compact?: boolean; progress?: boolean }) {
  return <section className={`rail ${compact ? 'rail-compact' : ''}`} aria-label={title}><div className="rail-heading"><h2>{title}</h2>{!compact && <button className="see-all">See all</button>}{title === 'New Trailer' && <span className="sort-label">Sort by: <b>Today ↕</b></span>}</div><div className="rail-list">{projects.map(project => <ProjectCard key={project.id} project={project} compact={compact} progress={progress} />)}</div></section>
}

function Hero({ project }: { project: Project }) {
  const heroRef = useRef<HTMLElement>(null)
  const tilt = (event: PointerEvent<HTMLElement>) => { if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || event.pointerType !== 'mouse') return; const bounds = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - bounds.left) / bounds.width - .5; const y = (event.clientY - bounds.top) / bounds.height - .5; event.currentTarget.style.setProperty('--tilt-x', `${-y * 7}deg`); event.currentTarget.style.setProperty('--tilt-y', `${x * 7}deg`); event.currentTarget.style.setProperty('--glare-x', `${(x + .5) * 100}%`); event.currentTarget.style.setProperty('--glare-y', `${(y + .5) * 100}%`) }
  const resetTilt = () => { heroRef.current?.style.setProperty('--tilt-x', '0deg'); heroRef.current?.style.setProperty('--tilt-y', '0deg') }
  return <section ref={heroRef} className="hero" aria-label="Projeto em destaque" onPointerMove={tilt} onPointerLeave={resetTilt}><ProjectArt project={project} className="hero-art" /><div className="hero-shade" /><div className="hero-content"><span className="hero-eyebrow"><span className="live-dot" /> Now Trending</span><div className="hero-bottom"><div className="hero-tags"><span>{project.category}</span><span>{project.stack.split(' • ')[0]}</span></div><h1>{project.title}</h1><p>{project.description}</p><div className="hero-actions"><button className="primary-button"><Icon name="play" size={15} fill="currentColor" />Test</button><button className="secondary-button"><Icon name="download" size={15} />Download</button><button className="more-button" aria-label="Mais informações sobre o projeto"><span>···</span></button></div></div></div><div className="hero-pagination"><button aria-label="Destaque anterior"><Icon name="arrowLeft" size={17} /></button><button aria-label="Próximo destaque"><Icon name="arrowRight" size={17} /></button></div></section>
}

function SettingsOverlay({ close }: { close: () => void }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close() }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [close])
  return <div className="overlay" onMouseDown={event => { if (event.target === event.currentTarget) close() }}><section className="overlay-panel glass overlay-settings" role="dialog" aria-modal="true" aria-label="Configurações"><button className="modal-close" onClick={close} aria-label="Fechar"><Icon name="close" size={19} /></button><div className="modal-kicker">PREFERENCES / 02</div><h2>Configurações</h2><p className="modal-description">Personalize sua experiência.</p><div className="setting-row"><div className="setting-icon"><Icon name="globe" /></div><div><strong>Idioma</strong><span>Idioma da interface</span></div><button className="setting-value">Português <Icon name="chevronDown" size={15} /></button></div><p className="setting-note">Outros idiomas estarão disponíveis em breve.</p></section></div>
}

function HomePage({ openSearch, goProfile }: { openSearch: () => void; goProfile: () => void }) {
  const [category, setCategory] = useState<string>('All')
  const [moreOpen, setMoreOpen] = useState(false)
  const visible = (projects: Project[]) => category === 'All' ? projects : projects.filter(project => project.category === category)
  const featured = mockProjects.find(project => project.featured)!
  const recent = visible(mockProjects.filter(project => project.recent))
  const suggested = visible(mockProjects.filter(project => project.suggested))
  const history = visible(mockProjects.filter(project => project.historyProgress !== undefined))
  const selectCategory = (value: string) => { setCategory(value); setMoreOpen(false) }
  return <main className="dashboard glass"><div className="dashboard-top"><button className="search-trigger" onClick={openSearch}><Icon name="search" size={17} /><span>Search projects</span><kbd>⌘ K</kbd></button><nav className="categories" aria-label="Categorias">{primaryCategories.map(item => <button key={item} className={`category-pill ${category === item ? 'active' : ''}`} onClick={() => selectCategory(item)}>{item}</button>)}<div className="more-wrap"><button className={`category-pill more-trigger ${moreCategories.includes(category as typeof moreCategories[number]) ? 'active' : ''}`} onClick={() => setMoreOpen(!moreOpen)} aria-expanded={moreOpen}>More <Icon name="chevronDown" size={13} /></button>{moreOpen && <div className="more-menu glass">{moreCategories.map(item => <button key={item} onClick={() => selectCategory(item)}>{item}</button>)}</div>}</div></nav><button className="profile-chip" onClick={goProfile} aria-label="Abrir perfil"><span className="notification-bell">♢<i /></span><span className="avatar-mini"><img src={profilePhoto} alt="" /></span><span className="profile-text"><strong>{mockProfile.displayName}</strong><small>{mockProfile.role}</small></span><Icon name="chevronDown" size={14} /></button></div><div className="dashboard-grid"><div className="left-column"><Rail title="New Trailer" projects={recent.length ? recent : mockProjects.filter(project => project.recent)} compact /><Rail title="Continue Watching" projects={history.length ? history : mockProjects.filter(project => project.historyProgress !== undefined)} compact progress /></div><div className="main-column"><Hero project={category === 'All' ? featured : (mockProjects.find(project => project.category === category) ?? featured)} /><Rail title="You might like" projects={suggested.length ? suggested.slice(0, 4) : mockProjects.filter(project => project.suggested).slice(0, 4)} /></div></div></main>
}

export default function App() {
  const [view, setView] = useState<View>(location.pathname === '/profile' ? 'profile' : 'home')
  const [searchOpen, setSearchOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  useEffect(() => { const sync = () => setView(location.pathname === '/profile' ? 'profile' : 'home'); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync) }, [])
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true) } }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [])
  const navigate = (next: View) => { const path = next === 'profile' ? '/profile' : '/'; if (location.pathname !== path) history.pushState(null, '', path); setView(next); setSearchOpen(false); setSettingsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  return <><div className="scene" aria-hidden="true" /><CustomCursor /><div className="app-shell"><BrowserBar view={view} /><Sidebar view={view} navigate={navigate} openSettings={() => setSettingsOpen(true)} />{view === 'profile' ? <ProfilePage goHome={() => navigate('home')} /> : <HomePage openSearch={() => setSearchOpen(true)} goProfile={() => navigate('profile')} />}</div>{searchOpen && <SearchOverlay close={() => setSearchOpen(false)} />}{settingsOpen && <SettingsOverlay close={() => setSettingsOpen(false)} />}</>
}
