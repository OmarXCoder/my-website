import PageContainer from './PageContainer';

export default function PageHeader({ heading, children, className }) {
    const classProp = className ?? '';

    return (
        <header className={`bg-amber-50 pt-16 md:pt-20 ${classProp}`}>
            <PageContainer>
                <div className="mx-auto max-w-2xl py-16 md:py-20">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-center text-4xl font-bold tracking-widest text-slate-800 md:text-6xl">
                            {heading}
                        </h1>
                        <div className="h-1 w-24 bg-amber-400"></div>
                    </div>
                    {children}
                </div>
            </PageContainer>
        </header>
    );
}
