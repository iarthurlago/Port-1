import { useEffect, useState, type CSSProperties } from 'react'
import { Icon } from './Icons'
import { mockProjects, type Project } from '../data/mock'

function ProjectCover({ project }: { project: Project }) {
  return <div className={`project-art art-${project.art}`} aria-hidden="true">
    <div className="art-orbit art-orbit-one" />
    <div className="art-orbit art-orbit-two" />
    <div className="art-glow" />
    <span className="art-mark">{project.monogram}</span>
  </div>
}

export function SearchOverlay({ close }: { close: () => void }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(2)
  const results = (query
    ? mockProjects.filter(project => `${project.title} ${project.category} ${project.stack} ${project.description}`.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR')))
    : mockProjects.slice(1)
  ).slice(0, 5)
  const activeIndex = Math.min(selected, results.length - 1)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') setSelected(index => Math.max(0, index - 1))
      if (event.key === 'ArrowRight') setSelected(index => Math.min(results.length - 1, index + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, results.length])

  return <div className="search-view" role="dialog" aria-modal="true" aria-label="Busca de projetos" onPointerDown={event => { if (!(event.target as Element).closest('.search-floating, .coverflow-card')) close() }}>
    <div className="search-floating">
      <Icon name="search" size={22} />
      <input autoFocus value={query} onChange={event => { setQuery(event.target.value); setSelected(2) }} placeholder="Pesquisar projetos..." aria-label="Pesquisar projetos" />
      <kbd>ESC</kbd>
    </div>
    <div className="coverflow" role="list" aria-label="Resultados da pesquisa">
      {results.map((project, index) => {
        const offset = index - activeIndex
        const distance = Math.abs(offset)
        const style = {
          '--offset': offset,
          '--card-scale': 1 - distance * .095,
          '--card-depth': `${-distance * 36}px`,
          '--card-rotation': `${offset * -15}deg`,
          zIndex: 10 - distance,
        } as CSSProperties
        return <button className={`coverflow-card${offset === 0 ? ' is-current' : ''}`} style={style} key={project.id} onClick={() => setSelected(index)} aria-label={`${project.title}${offset === 0 ? ', em destaque' : ''}`}>
          <ProjectCover project={project} />
          <span className="coverflow-title">{project.title}</span>
        </button>
      })}
      {results.length === 0 && <p className="coverflow-empty">Nenhum projeto encontrado.</p>}
    </div>
  </div>
}
