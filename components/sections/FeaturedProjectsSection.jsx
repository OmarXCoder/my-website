import Link from 'next/link';
import PageSection from '../PageSection';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '../../data/data';
import SectionTagline from '../SectionTagline';

export default function FeaturedProjectsSection() {
    return (
        <PageSection id="projects" heading="Featured Projects" className="bg-slate-50">
            <SectionTagline>
                Here&apos;s a selection of some of my prototypes, digital products, and open-source projects in the
                wild!
            </SectionTagline>
            <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 lg:grid-cols-2 lg:gap-20">
                {PROJECTS.filter((project) => project.featured).map((project, index) => (
                    <ProjectCard project={project} className="mx-auto max-w-lg lg:max-w-max" key={index} />
                ))}
            </div>

            <div className="mt-16 text-center md:mt-20">
                <Link href="/projects">
                    <a className="btn btn-secondary">View More Projects</a>
                </Link>
            </div>
        </PageSection>
    );
}
