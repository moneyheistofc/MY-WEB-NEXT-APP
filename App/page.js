import Header from './components/Header';
import Hero from './components/Hero';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Hero />
        <PersonalInfo />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
    }
