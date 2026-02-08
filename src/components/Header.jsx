import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <nav className="nav container">
        <div className="logo">
          <h1>Sofia Müller</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Ana Sayfa</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Hakkımda</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projelerim</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Yeteneklerim</Link></li>
          <li><Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Deneyim</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;