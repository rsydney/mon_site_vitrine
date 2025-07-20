import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import PortfolioPreview from '../components/PortfolioPreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function Home() {
  return (
    <>
      <Header />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
  <section className="snap-start">
    <Hero />
  </section>
  <section className="snap-start">
    <About />
  </section>
  <section className="snap-start">
    <Skills />
  </section>
  <section className="snap-start">
    <PortfolioPreview />
  </section>
  <section className="snap-start">
    <Contact />
    <Footer />
  </section>
</main>
      
     
    </>
  );
}

export default Home;
