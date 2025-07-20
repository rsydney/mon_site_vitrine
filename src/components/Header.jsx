import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/rs.PNG';

export default function Header() {
  const location = useLocation();
  const isNotHome = location.pathname !== '/';

  const scrollLink = (hash) => {
    return isNotHome ? `/#${hash}` : `#${hash}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <a href={scrollLink('about')} className="hover:text-purple-400 transition">A propos</a>
          <a href={scrollLink('skills')} className="hover:text-purple-400 transition">Skills</a>
          <a href={scrollLink('portfolio')} className="hover:text-purple-400 transition">Portfolio</a>
        </nav>

        {/* Contact button */}
        <a
          href={scrollLink('contact')}
          className="bg-white text-black font-bold px-4 py-2 rounded-full border border-purple-500 hover:bg-purple-600 hover:text-white transition"
        >
          Contactez Moi
        </a>
      </div>
    </header>
  );
}
