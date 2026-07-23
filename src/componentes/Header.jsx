export default function Header() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#hero" className="logo">Ivan Arthur</a>
        <ul className="nav-menu">
          <li><a href="#hero">Início</a></li>
          <li><a href="#skills-qualifications">Habilidades & Cursos</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
}