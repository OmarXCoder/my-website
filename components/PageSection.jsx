import PageContainer from './PageContainer';

export default function PageSection({ heading, children, className, ...props }) {
    const classProp = className ?? '';

    return (
        <section
            className={`scroll-m-16 border-t border-slate-100 py-16 md:scroll-m-20 md:py-20 ${classProp}`}
            {...props}
        >
            <PageContainer>
                {heading && (
                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-center text-2xl font-bold tracking-widest text-slate-800 sm:text-3xl">
                            {heading}
                        </h1>
                        <div className="h-1 w-20 bg-amber-400"></div>
                    </div>
                )}

                {children}
            </PageContainer>
        </section>
    );
}
