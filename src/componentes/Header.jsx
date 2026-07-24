import { useEffect, useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const navItems = [
  { href: '#hero', labelKey: 'nav.home' },
  { href: '#skills-qualifications', labelKey: 'nav.skills' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#contact', labelKey: 'nav.contact' },
];

export default function Header() {
  const [zoom75, setZoom75] = useState(false);
  const { t } = useTranslation();

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
              <a href={item.href}>{t(item.labelKey)}</a>
            </li>
          ))}
        </ul>

        <LanguageToggle />
       
      </div>
    </nav>
  );
}