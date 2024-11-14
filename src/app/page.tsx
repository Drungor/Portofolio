import Header from './components/header/header';
import Presentation from './components/presentation/presentation';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

// introduire ici fonction react roll pour slider vers les sections

export default function Home() {
  return (
    <div className="container mx-auto halo-gradient text-white p-4 py-4">
      <Header />
      <Presentation />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}