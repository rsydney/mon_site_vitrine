import { FaPencilRuler, FaCode, FaShoppingCart } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
    >
      <div className="inline-block border-4 border-purple-600 px-10 py-2 mb-8">
        <h2 className="text-xl font-bold tracking-widest text-purple-600">A PROPOS</h2>
      </div>
      {/* Paragraphe principal */}
      <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-justify">
        <p>
          Passionné de sport, finance mais aussi de technologie informatique. J’ai obtenu ma licence en Informatique Appliquée à la Gestion d’Entreprise spécialisation Conception et Développement de Solution Digitale au Digital Campus du groupe ISM. Fullstack de formation j’ai une préférence pour le développement front-end, l’UX/UI et le design graphique. Je me décris comme étant quelqu’un de pragmatique et rigoureux dans mon travail.
        </p>
        <p>
          Vous avez une idée, un projet mais ne savez pas comment le digitaliser. Je vous suis de la conception à sa réalisation. Rigueur, éthique, respect des délais et exigences sont les qualités qui définissent mon travail. Ci-dessous vous retrouverez les domaines dans lesquels j’opère avec une brève description. Bienvenu sur ma page et si vous souhaitez collaborer avec moi, cliquez sur le bouton contact.
        </p>
      </div>

      {/* Bouton Contact */}
      <div className="mt-6">
        <a
          href="#contact"
          className="text-purple-600 font-bold border-l-2 border-r-2 border-purple-600 px-4 py-1"
        >
          CONTACT
        </a>
      </div>

      {/* Domaines de compétence */}
      <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
        {/* Bloc DESIGN */}
        <div className="relative bg-white px-4">
          <FaPencilRuler className="text-gray-200 text-2xl absolute -top-6 left-1" />
          <h3 className="text-purple-600 font-bold text-lg mb-2">DESIGN</h3>
          <p className="text-gray-700 text-sm">
            Que ce soit du Design Graphique ou du Motion Design, je digitalise vos idées à travers des affiches, flyers, miniatures YouTube, vidéo etc. À l’aise avec la suite Adobe, Figma ou même l’IA, vos projets seront entre de bonnes mains.
          </p>
        </div>

        {/* Bloc DEV */}
        <div className="relative bg-white px-4">
          <FaCode className="text-gray-200 text-2xl absolute -top-6 left-1" />
          <h3 className="text-purple-600 font-bold text-lg mb-2">DEVELOPMENT</h3>
          <p className="text-gray-700 text-sm">
            Je me concentre sur la partie Front-End de votre site ou application, WEB ou MOBILE. Possédant une bonne veille technologique, je suis à l’affût des tendances et des meilleures options pour vos projets.
          </p>
        </div>

        {/* Bloc E-commerce */}
        <div className="relative bg-white px-4">
          <FaShoppingCart className="text-gray-200 text-2xl absolute -top-6 left-1" />
          <h3 className="text-purple-600 font-bold text-lg mb-2">E-COMMERCE</h3>
          <p className="text-gray-700 text-sm">
            Vous possédez un business en ligne ? Pas de problème : SHOPIFY, ECWID, WORDPRESS sont les outils que j’utilise pour créer vos sites E-commerce. Venez les découvrir dans mon portfolio plus bas.
          </p>
        </div>
      </div>
    </motion.section>
    
  );
}




