import type { SVGProps } from 'react'

export type IconName = 'arrowLeft' | 'arrowRight' | 'refresh' | 'copy' | 'check' | 'home' | 'heart' | 'user' | 'settings' | 'search' | 'chevronDown' | 'play' | 'download' | 'arrowUpRight' | 'close' | 'globe' | 'sparkle' | 'menu'

const paths: Record<IconName, React.ReactNode> = {
  arrowLeft: <><path d="m15 18-6-6 6-6" /></>,
  arrowRight: <><path d="m9 18 6-6-6-6" /></>,
  refresh: <><path d="M20 11a8 8 0 1 0-2.4 6.2" /><path d="M20 4v7h-7" /></>,
  copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z" /><path d="M9 21v-7h6v7" /></>,
  heart: <path d="M20.8 8.6c0 4.6-8.8 11-8.8 11s-8.8-6.4-8.8-11a5 5 0 0 1 8.8-3.2 5 5 0 0 1 8.8 3.2Z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V20h-2.4v-.2a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.5 15a1.7 1.7 0 0 0-1.55-1H6.7v-2.4h.25A1.7 1.7 0 0 0 8.5 10a1.7 1.7 0 0 0-.34-1.88L8.1 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.74 6a1.7 1.7 0 0 0 1-1.55V4.2h2.4v.25a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1h.25v2.4h-.25A1.7 1.7 0 0 0 19.4 15Z" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  play: <path d="m8 5 11 7-11 7V5Z" />,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M4 17v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" /></>,
  arrowUpRight: <><path d="M7 17 17 7M8 7h9v9" /></>,
  close: <path d="M5 5 19 19M19 5 5 19" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  sparkle: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" /><path d="m19 17 .5 1.5L21 19l-1.5.5L19 21l-.5-1.5L17 19l1.5-.5L19 17Z" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
}

export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>
}
