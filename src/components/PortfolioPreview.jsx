import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

// Si tu utilises src/assets, importe les fichiers comme suit
import DAKAR from '../assets/images/DAKAR.png';
import flutscreen from '../assets/images/flutscreen.PNG'

function PortfolioPreview() {
  const navigate = useNavigate();

  // Utilisation des imports pour les images et vidéos
  const projects = [
    { type: 'image', src: DAKAR, title: '', description: 'THE HERD X ARTISTE DU DAANU', link: '/portfolio/design' },
    { type: 'video', src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010143/kulture2_iuohn2.mp4', title: '', description: 'KULTURE 2 (AdobeXD)', link: '/portfolio/design' },
    { type: 'video', src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010128/orange_f0nfzy.mp4', title: '', description: 'ORANGE (Adobe After Effects)', link: '/portfolio/design' },
    { type: 'image', src: flutscreen, title: '', description: 'GESTION DETTE (Flutter)', link: '/portfolio/code' }, // Remplacer par chemin valide
    { type: 'video', src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753011333/bison_tejr0e.mp4', title: '', description: 'BISON COOLERS (HTML/CSS)', link: '/portfolio/code' },
    { type: 'video', src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010208/angular_pdpspt.mp4', title: '', description: 'FIL ROUGE (Angular)', link: '/portfolio/code' }, // Remplacer par chemin valide
  ];

  return (
    <motion.section
      id="portfolio"
      className="py-16 px-8 bg-gray-50 text-center"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="inline-block border-4 border-purple-600 px-10 py-2 mb-12">
        <h2 className="text-xl font-bold tracking-widest text-purple-600">PORTFOLIO</h2>
      </div>
      
      <p className="mb-6">Voici un aperçu de mes projets</p>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => navigate('/portfolio/code')}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Projets Code
        </button>
        <button
          onClick={() => navigate('/portfolio/design')}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          Projets Design
        </button>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="relative overflow-hidden group">
            {project.type === 'image' ? (
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                src={project.src}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                muted
                loop
                autoPlay
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <a
                href={project.link}
                className="mt-2 inline-block text-blue-400 hover:text-blue-600"
              >
                Voir plus
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default PortfolioPreview;
