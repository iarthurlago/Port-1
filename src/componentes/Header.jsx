import { useEffect, useState } from 'react';

const navItems = [
  { href: '#hero', label: 'Início' },
  { href: '#skills-qualifications', label: 'Habilidades & Cursos' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [zoom75, setZoom75] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (zoom75) root.classList.add('zoom-75');
    else root.classList.remove('zoom-75');
    return () => root.classList.remove('zoom-75');
  }, [zoom75]);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#hero" className="logo">Ivan Arthur</a>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

       
      </div>
    </nav>
  );
}