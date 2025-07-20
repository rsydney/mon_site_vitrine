import Header from '../../components/Header';
import Footer from '../../components/Footer';

import flutscreen from '../../assets/images/flutscreen.PNG';



export default function CodeProjects() {
  const codeProjects = [
    {
      type: 'image',
      src: flutscreen,
      title: 'Gestion de dette',
      description: 'App Flutter pour gérer les dettes et paiements du boutiquier du quartier. GitHub : https://github.com/rsydney/examen_flutter.git',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753011333/bison_tejr0e.mp4',
      title: 'BISON COOLERS',
      description: 'Une page e-commerce avec HTML/CSS',
    },
    {
      type: 'video',
      src: 'https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010208/angular_pdpspt.mp4',
      title: 'FIL ROUGE',
      description: 'Projet gestion des absences pour ISM, partie Administrateur. Lien : https://gestion-ism.vercel.app/',
    },
  ];

  return (
    <div className="py-20 px-6">
      <Header />

      <div className="border-4 border-purple-600 px-10 py-2 mb-8 mx-auto max-w-max">
        <h2 className="text-xl font-bold tracking-widest text-purple-600 text-center">PROJETS CODE</h2>
      </div>

      <p className="text-center mb-12">Voici quelques projets de développement que j'ai réalisés.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {codeProjects.map((project, index) => (
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
