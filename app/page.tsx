import { Navbar } from './components/nav';
import { About } from './components/about';
import { TechStack } from './components/tech-stack';
import { WorkSamples } from './components/work-samples';
import { Experience } from './components/experience';
import { Intro } from './components/intro';
import { Project } from './components/projects';

export default function Page() {
  return (
    <>
    <Navbar />
    <section className="flex flex-col md:flex-column place-items-center">
    <Intro />
    <About />
    <TechStack />
    <WorkSamples />
    <Project />
    <Experience />
    </section>
    </>
  )
}
