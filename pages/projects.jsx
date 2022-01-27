import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import SiteContainer from '../components/SiteContainer';
import SiteSection from '../components/SiteSection';
import { PROJECTS } from '../data/data';

export default function About() {
    return (
        <main className="flex flex-1 flex-col">
            <Head>
                <title>Omar Ali | Projects</title>
            </Head>

            <header className="bg-amber-50 py-20 lg:py-32">
                <SiteContainer>
                    <div className="mx-auto max-w-2xl pt-20">
                        <div className="flex flex-col items-center">
                            <h1 className="mb-2 text-6xl font-bold tracking-widest text-slate-800">My Projects</h1>
                            <div className="h-1 w-20 bg-amber-400"></div>
                        </div>
                    </div>
                </SiteContainer>
            </header>

            <SiteSection>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard project={project} className="mx-auto max-w-lg lg:max-w-max" key={index} />
                    ))}
                </div>
            </SiteSection>
        </main>
    );
}
