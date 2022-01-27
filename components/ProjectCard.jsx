export default function ProjectCard({ project, className }) {
    const classProp = className ?? '';
    return (
        <div
            className={`flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow duration-500 hover:shadow-md lg:hover:scale-105 ${classProp}`}
            style={{ transitionProperty: 'transform, box-shadow' }}
        >
            <div>
                <img src={project.img} alt={project.heading} className="rounded-lg" />
            </div>
            <div className="flex flex-1 justify-between pt-6 pb-4">
                <div className="flex flex-col justify-between">
                    <div>
                        <h5 className="mb-2 text-lg font-semibold tracking-wider text-slate-800">{project.heading}</h5>
                        <p className="text-sm text-slate-500">{project.description}</p>
                    </div>
                    <div className="mt-8 flex space-x-2">
                        {project.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-md border-2 py-1 px-2 text-xs text-slate-500 transition-colors duration-300 hover:border-slate-100"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="ml-4 flex flex-shrink-0 flex-col justify-end sm:ml-12">
                    <a href={project.link} className="btn btn-primary">
                        <span className="mr-3">View Project</span>
                        <i className="fas fa-long-arrow-alt-right ml-auto"></i>
                    </a>
                    {project.sourceCodeLink && (
                        <a href={project.sourceCodeLink} className="btn btn-secondary mt-4">
                            <span className="mr-3">Source Code</span>
                            <i className="fas fa-long-arrow-alt-right ml-auto"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
