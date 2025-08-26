import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import DAKAR from '../../assets/images/DAKAR.png';

export default function DesignProjects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const designProjects = [
    {
      type: 'image',
      src: DAKAR,
      title: 'THE HERD X ARTISTE DU DAANU',
      description: 'Affiche pour annoncer la collaboration entre les deux entreprises (IA)',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010143/kulture2_iuohn2.mp4',
      title: 'KULTURE 2',
      description: 'UI Design mobile réalisé sur Adobe XD',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010128/orange_f0nfzy.mp4',
      title: 'ORANGE',
      description: 'Animation pour une campagne publicitaire avec After Effects',
    },
  ];

  // 👉 Images à afficher quand on clique sur THE HERD
  const herdGallery = [
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221470/opjavril_gnr9fk.png",
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221466/modecine_o7l3t6.png",
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221466/Publication_Instagram_Nouveaut%C3%A9s_Maroquinerie_Minimaliste_%C3%89l%C3%A9gant_Beige_3_gdfwsd.png",
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221463/GOUFDE_tki4sc.jpg",
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221467/opjmai_q8nqmd.png",
    "https://res.cloudinary.com/dyc7sit2n/image/upload/v1756221770/DAKAR_d4qn3q.png",
  ];

  return (
    <div className="py-20 px-6 relative">
      <Header />

      <div className="border-4 border-purple-600 px-10 py-2 mb-8 mx-auto max-w-max">
        <h2 className="text-xl font-bold tracking-widest text-purple-600 text-center">
          PROJETS DESIGN
        </h2>
      </div>

      <p className="text-center mb-12">
        Voici quelques projets de design graphique ou d’animation.
      </p>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designProjects.map((project, index) => (
          <div key={index} className="flex flex-col items-start">
            {project.type === 'image' ? (
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-64 object-cover rounded shadow cursor-pointer"
                onClick={() =>
                  project.title === 'THE HERD X ARTISTE DU DAANU' &&
                  setIsGalleryOpen(true)
                }
              />
            ) : (
              <video
                src={project.src}
                className="w-full h-64 object-cover rounded shadow"
                muted
                loop
                autoPlay
              />
            )}
            <h3 className="mt-4 text-lg font-semibold text-purple-600">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Modal galerie */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl w-full relative">
            {/* Bouton fermer */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-3 right-3 text-black text-2xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-center text-xl font-bold mb-6 text-purple-600">
              THE HERD X ARTISTE DU DAANU
            </h2>

            {/* Grille d'images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {herdGallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Herd ${i + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mb-20" />
      <Footer />
    </div>
  );
}
