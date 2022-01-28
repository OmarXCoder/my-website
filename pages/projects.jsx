import PageHeader from '../components/PageHeader';
import PageSection from '../components/PageSection';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/data';

export default function About() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHeader heading="My Projects" />

            <PageSection className="bg-slate-50">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard project={project} className="mx-auto max-w-lg lg:max-w-max" key={index} />
                    ))}
                </div>
            </PageSection>
        </main>
    );
}
