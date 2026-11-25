import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const cursor = document.querySelector<HTMLElement>('.custom-cursor')
    if (!cursor) return
    const onMove = (event: PointerEvent) => {
      cursor.style.setProperty('--cursor-x', `${event.clientX}px`)
      cursor.style.setProperty('--cursor-y', `${event.clientY}px`)
      setVisible(true)
      setActive(Boolean((event.target as Element).closest('button, a, input, [role="button"]')))
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <div className={`custom-cursor${active ? ' is-active' : ''}${visible ? ' is-visible' : ''}`} aria-hidden="true" />
}
