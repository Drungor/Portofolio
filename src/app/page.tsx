import Header from './components/header/header';
import Presentation from './components/presentation/presentation';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';


export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Resume />
      <Projects />
    </>
  );
}