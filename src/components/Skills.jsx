// 🔽 IMPORTS DES IMAGES (assure-toi que les noms correspondent exactement aux fichiers)
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import tailwind from '../assets/images/tailwind.png';
import javascript from '../assets/images/javascript.png';
import adobe from '../assets/images/adobe.png';
import angular from '../assets/images/angular.png';
import git from '../assets/images/git.png';
import figma from '../assets/images/figma.png';

import nodejs from '../assets/images/nodejs.png';
import mysql from '../assets/images/mysql.png';
import react from '../assets/images/react.png';
import flutter from '../assets/images/flutter.png';

import uk from '../assets/images/uk.png';
import blender from '../assets/images/blender.png';
import bitcoin from '../assets/images/bitcoin.png';
import shopify from '../assets/images/shopify.png';

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
    >
      <div className="inline-block border-4 border-purple-600 px-10 py-2 mb-12">
        <h2 className="text-xl font-bold tracking-widest text-purple-600">SKILLS</h2>
      </div>
      {/* USING NOW */}
      <h3 className="text-purple-600 font-bold mb-6 text-lg uppercase">J'UTILISE:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center mb-12">
        <SkillItem src={html5} label="HTML5" />
        <SkillItem src={css3} label="CSS3" />
        <SkillItem src={tailwind} label="Tailwind" />
        <SkillItem src={javascript} label="JavaScript" />
        <SkillItem src={adobe} label="Adobe Suite" />
        <SkillItem src={angular} label="Angular" />
        <SkillItem src={git} label="Git" />
        <SkillItem src={figma} label="Figma" />
      </div>

      {/* LEARNING */}
      <h3 className="text-purple-600 font-bold mb-6 text-lg uppercase">J'APPRENDS:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center mb-12">
        <SkillItem src={nodejs} label="NodeJS" />
        <SkillItem src={mysql} label="MySQL" />
        <SkillItem src={react} label="React" />
        <SkillItem src={flutter} label="Flutter" />
      </div>

      {/* OTHER SKILLS */}
      <h3 className="text-purple-600 font-bold mb-6 text-lg uppercase">D'AUTRES SKILLS:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center mb-12">
        <SkillItem src={uk} label="Anglais C1/C2" />
        <SkillItem src={blender} label="Blender" />
        <SkillItem src={bitcoin} label="Crypto-trader" />
        <SkillItem src={shopify} label="Shopify" />
      </div>

      {/* SOFTSKILLS */}
<h3 className="text-purple-600 font-bold mb-6 text-lg uppercase text-center">Softskills</h3>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Texte à gauche */}
  <div className="text-sm text-gray-700 text-justify space-y-3">
    <p>
      Conscient des réalités des entreprises, j’ai eu à me former aux softskills grâce à la SOFTSKILLS ACADEMY du GROUPE ISM. J’ai rejoint cette 2e famille quand j’étais en première année de ma licence. Dans cette même année j’ai été Chargé Logistique du pôle sport de la SSA, ma 2e année j’ai été chargé du pôle Logistique et durant ma 3e année Coach Logistique.
      <br />
      Le rôle du pôle logistique est de veiller au bon déroulement des activités extra scolaires à travers le matériel à utiliser avant, pendant et après l’événement, la sécurité des étudiants, la ponctualité et son bon déroulement. De ce que j’ai appris pendant ces 3 années :
    </p>
    <ul className="list-disc pl-6">
      <li>La ponctualité</li>
      <li>Le travail d’équipe</li>
      <li>La gestion des responsabilités</li>
      <li>Le sens de l’écoute</li>
      <li>La prise de parole en public</li>
      <li>Le sang froid et la maîtrise des émotions</li>
      <li>Le leadership (étant coach je devais léguer à mes chargés et aux nouveaux de 1re année tout ce que j’avais eu à apprendre)</li>
    </ul>
  </div>

  {/* Vidéo avec titre à droite */}
  <div className="w-full flex flex-col items-center space-y-4">
    <h4 className="text-purple-600 font-semibold text-center">COACH LOGISTIQUE 24-25</h4>
    <video
      src="https://res.cloudinary.com/dyc7sit2n/video/upload/v1753010215/1j1c_wgxfze.mov"
      className="w-full h-auto max-w-md rounded shadow"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</div>

    </motion.section>   
  );
}

// ✅ Composant pour chaque compétence
function SkillItem({ src, label }) {
  return (
    <div className="flex flex-col items-center">
      <img src={src} alt={label} className="h-12 w-12 object-contain mb-2" />
      <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
    </div>
  );
}



