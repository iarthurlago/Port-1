export type Category = 'Projetos Pessoais' | 'Hackathons' | 'Landing Pages' | 'Web Applications' | 'Apps' | 'Automações' | 'Prompt Engineering' | 'Vídeos com I.A.'
export type ArtTheme = 'violet' | 'cyan' | 'coral' | 'lime' | 'blue' | 'rose' | 'amber' | 'mint'

export interface Project {
  id: string
  title: string
  category: Category
  stack: string
  description: string
  year: string
  art: ArtTheme
  monogram: string
  featured?: boolean
  recent?: boolean
  suggested?: boolean
  historyProgress?: number
}

export interface Profile {
  displayName: string
  role: string
  initials: string
  about: string
  location: string
  availability: string
  experience: { role: string; company: string; period: string }[]
}

export const mockProfile: Profile = {
  displayName: 'Alex Morgan',
  role: 'Creative Developer',
  initials: 'AM',
  about: 'Construindo experiências digitais com código, curiosidade e atenção aos detalhes.',
  location: 'Disponível para trabalho remoto',
  availability: 'Aberto a projetos',
  experience: [
    { role: 'Front-end Developer', company: 'Studio North', period: '2023 — agora' },
    { role: 'UI Engineer', company: 'Independent', period: '2021 — 2023' },
  ],
}

export const mockProjects: Project[] = [
  { id: 'orbit', title: 'Orbit', category: 'Web Applications', stack: 'React • TypeScript • Design System', description: 'Um workspace que transforma ideias complexas em fluxos simples e visuais.', year: '2026', art: 'violet', monogram: 'O', featured: true, suggested: true },
  { id: 'lumina', title: 'Lumina', category: 'Projetos Pessoais', stack: 'Next.js • WebGL', description: 'Uma experiência imersiva para explorar novas perspectivas.', year: '2026', art: 'cyan', monogram: 'L', recent: true, suggested: true },
  { id: 'atlas', title: 'Atlas', category: 'Hackathons', stack: 'AI • React', description: 'Conectando pessoas e lugares por meio de dados.', year: '2025', art: 'coral', monogram: 'A', recent: true, suggested: true },
  { id: 'mono', title: 'Mono Studio', category: 'Landing Pages', stack: 'Astro • Motion', description: 'Uma landing page editorial para uma marca criativa.', year: '2025', art: 'lime', monogram: 'M', recent: true, suggested: true },
  { id: 'flow', title: 'Flowstate', category: 'Apps', stack: 'React Native • UX', description: 'Foco e tranquilidade para a rotina digital.', year: '2025', art: 'blue', monogram: 'F', suggested: true, historyProgress: 68 },
  { id: 'echo', title: 'Echo AI', category: 'Prompt Engineering', stack: 'AI • Product', description: 'Uma interface para conversas que geram clareza.', year: '2025', art: 'rose', monogram: 'E', suggested: true, historyProgress: 32 },
  { id: 'pulse', title: 'Pulse', category: 'Automações', stack: 'Node.js • Automation', description: 'Automação leve para liberar tempo criativo.', year: '2024', art: 'amber', monogram: 'P', historyProgress: 84 },
  { id: 'frame', title: 'Frame / 01', category: 'Vídeos com I.A.', stack: 'Generative AI • Film', description: 'Um experimento de narrativa visual generativa.', year: '2024', art: 'mint', monogram: 'F', historyProgress: 47 },
]

export const primaryCategories = ['All', 'Projetos Pessoais', 'Hackathons', 'Landing Pages'] as const
export const moreCategories: Category[] = ['Web Applications', 'Apps', 'Automações', 'Prompt Engineering', 'Vídeos com I.A.']
