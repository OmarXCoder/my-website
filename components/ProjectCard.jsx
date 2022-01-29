export default function ProjectCard({ project, className }) {
    const classProp = className ?? '';
    return (
        <div
            className={`flex flex-col overflow-hidden rounded-lg bg-white p-4 shadow transition-shadow duration-300 hover:shadow-lg ${classProp}`}
        >
            <div className="relative overflow-hidden rounded-lg">
                <img src={project.img} alt={project.heading} />
                {project.comingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/75">
                        <span className="rounded-md bg-amber-400 py-2 px-6 text-slate-800 shadow">
                            <i className="far fa-clock"></i>
                            <span className="ml-2">Coming Soon</span>
                        </span>
                    </div>
                )}
            </div>
            <div className="flex-1 pt-6 pb-4 sm:flex sm:justify-between">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="text-xs font-medium tracking-wide text-slate-400">
                            <span className="">{project.date}</span>
                            {project.sourceCodeLink && <span className="ml-1 font-semibold">[open source]</span>}
                        </div>
                        <h5 className="mb-2 mt-1 text-lg font-semibold leading-snug tracking-wider text-slate-800">
                            <span>{project.heading}</span>
                        </h5>
                        <p className="text-sm text-slate-500">{project.description}</p>
                    </div>
                    <div className="-m-1 mt-8 flex flex-wrap">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="m-1 rounded-md border-2 py-1 px-2 text-xs text-slate-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 flex flex-shrink-0 flex-col sm:mt-0 sm:ml-12 sm:justify-end">
                    {!project.comingSoon && project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                            <span className="mr-3">View Demo</span>
                            <i className="fas fa-long-arrow-alt-right ml-auto"></i>
                        </a>
                    )}
                    {project.sourceCodeLink && (
                        <a
                            href={project.sourceCodeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary mt-4"
                        >
                            <span className="mr-3">Source Code</span>
                            <i className="fas fa-long-arrow-alt-right ml-auto"></i>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
