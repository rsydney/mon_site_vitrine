import Header from '../../components/Header';
import Footer from '../../components/Footer';

import DAKAR from '../../assets/images/DAKAR.png';




export default function DesignProjects() {
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

  return (
    <div className="py-20 px-6">
      <Header />

      <div className="border-4 border-purple-600 px-10 py-2 mb-8 mx-auto max-w-max">
        <h2 className="text-xl font-bold tracking-widest text-purple-600 text-center">PROJETS DESIGN</h2>
      </div>

      <p className="text-center mb-12">Voici quelques projets de design graphique ou d’animation.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {designProjects.map((project, index) => (
          <div key={index} className="flex flex-col items-start">
            {project.type === 'image' ? (
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-64 object-cover rounded shadow"
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

      <div className="mb-20" />
      <Footer />
    </div>
  );
}
