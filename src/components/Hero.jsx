// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white pt-32"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-2xl font-[georgia] tracking-widest text-gray-700 mb-2">
        SYDNEY ITIERE
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
        JUNIOR DEVELOPER <br /> & GRAPHIC DESIGNER
      </h2>
      <div className="flex space-x-6 mt-6 text-2xl text-black">
        <a href="mailto:ruddyitiere@gmail.com" className="hover:text-purple-600">@</a>
        <a href="https://github.com/rsydney" target="_blank">
          <FaGithub className="hover:text-purple-600" />
        </a>
        <a href="https://www.linkedin.com/in/sydney-ruddy-itiere-38b3a0219" target="_blank">
          <FaLinkedin className="hover:text-purple-600" />
        </a>
      </div>
      <div className="mt-12 max-w-3xl">
        <h3 className="text-xl font-bold tracking-widest mb-2">INTRODUCTION</h3>
        <p className="text-gray-700">
          Passionné de sport, finance mais aussi de technologie informatique. J’ai obtenu ma licence en Informatique Appliquée a la Gestion d’Entreprise spécialisation Conception et Développement de Solution Digitale  au Digital Campus du groupe ISM.
Fullstack de formation j’ai une préférence pour le front-end et l'UX/UI Design. Je me décris comme étant quelqu’un de pragmatique et rigoureux dans mon travail. Bienvenu dans mon monde vous y découvrirai mes compétences et réalisations a travers mon portfolio.
        </p>
      </div>
      <div className="mt-8">
        <a href="#about" className="text-purple-600 font-bold border-l-2 border-r-2 border-purple-600 px-4 py-2">
          PLUS
        </a>
      </div>
    </motion.section>
  );
}




 