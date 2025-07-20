// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-white text-center"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true, amount: 0.3 }}
    >
      <div className="inline-block border-4 border-purple-600 px-10 py-2 mb-12">
        <h2 className="text-xl font-bold tracking-widest text-purple-600">CONTACT</h2>
      </div>
       <p className="text-gray-700 text-sm">
            Voici tout ce que j'avais a montrer, si vous appreciez mon travail, mon profil ou que vous souhaiterez <br/> collaborer avec moi remplissez ce formulaire et je me ferais un plaisir d'y repondre.<br/> Merci et a nos prochaines collaborations 😉
          </p>
     <form
  action="https://formspree.io/f/xkgzowpa"
  method="POST"
  className="max-w-2xl mx-auto space-y-6"
>
  <input
    type="text"
    name="name"
    required
    placeholder="Entrer votre nom*"
    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Entrer votre Email*"
    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
  />
  <input
    type="text"
    name="phone"
    placeholder="Numéro de téléphone"
    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
  />
  <textarea
    name="message"
    required
    rows="4"
    placeholder="Un message*"
    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
  ></textarea>

  {/* Optionnel : désactive le captcha Formspree */}
  <input type="hidden" name="_captcha" value="false" />

  <div className="flex justify-between items-center">
    <button type="submit" className="px-8 py-3 bg-purple-600 text-white rounded-lg">
      ENVOYER
    </button>
    <a
  href="/public/sydney CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg"
>
  CV
</a>
  </div>
</form>

    </motion.section>
  );
}




 