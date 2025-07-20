import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import des icônes

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p className="mb-4">&copy; {new Date().getFullYear()} SYD — Tous droits réservés.</p>
      <div className="flex justify-center space-x-6">
        {/* Lien vers GitHub */}
        <a
          href="https://github.com/rsydney" // Remplace par ton lien GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600"
        >
          <FaGithub className="text-2xl" />
        </a>

        {/* Lien vers LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sydney-ruddy-itiere-38b3a0219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" // Remplace par ton lien LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600"
        >
          <FaLinkedin className="text-2xl" />
        </a>

        {/* Lien vers Instagram */}
        <a
          href="https://www.instagram.com/23rd_creator?igsh=MXJ1dGU3YWhzMHFvcg%3D%3D&utm_source=qr" // Remplace par ton lien Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-600"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </footer>
  );
}
