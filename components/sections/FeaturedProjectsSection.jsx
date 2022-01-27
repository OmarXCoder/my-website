import Link from 'next/link';
import SiteSection from '../SiteSection';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '../../data/data';

export default function FeaturedProjectsSection() {
    return (
        <SiteSection id="projectsSection" heading="Featured Projects" className="bg-slate-100">
            <p className="mt-6 text-center text-slate-400">
                Here&apos;s a selection of some of my prototypes, digital products, <br />
                and open-source projects in the wild!
            </p>
            <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
                {PROJECTS.filter((project) => project.featured).map((project, index) => (
                    <ProjectCard project={project} className="mx-auto max-w-lg lg:max-w-max" key={index} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <Link href="/projects">
                    <a className="btn btn-primary uppercase">More Projects</a>
                </Link>
            </div>
        </SiteSection>
    );
}
