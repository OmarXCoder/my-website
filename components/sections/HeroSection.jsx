import Link from 'next/link';
import { SOCIAL_LINKS } from '../../data/data';
import SiteContainer from '../SiteContainer';

export default function HeroSection() {
    return (
        <header className="flex h-screen flex-col bg-amber-50 pt-24" id="heroSection">
            <SiteContainer className="flex flex-1 items-center">
                <div className="flex flex-1 items-center sm:px-8 md:px-12 lg:px-20">
                    <div className="flex-1">
                        <div>
                            <div className="mb-2 h-1 w-20 bg-amber-400"></div>
                            <h1 className="mb-2 text-5xl font-bold tracking-xl text-slate-800 sm:text-7xl">
                                I&apos;m Omar
                            </h1>
                        </div>
                        <h6 className="mb-6 font-semibold tracking-widest text-slate-500">
                            Freelance Web &amp; Mobile Fullstack Developer
                        </h6>
                        <div>
                            <a href="mailto:OmarXCoder@gmail.com" className="btn btn-primary uppercase">
                                Hire Me
                            </a>
                            <Link href="/about">
                                <a className="btn btn-ghost">More about me</a>
                            </Link>
                        </div>
                        <div className="mt-12 flex items-center space-x-6">
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    href={link.url}
                                    key={index}
                                    className="text-slate-800 transition-colors duration-300 hover:text-amber-400"
                                >
                                    <i className={`${link.icon} text-2xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="ml-12 hidden md:block">
                        <div className="h-[380px] w-[220px] rounded-lg border-4 border-amber-400 lg:h-[480px] lg:w-[320px]">
                            <div className="-mt-4 -ml-4 h-full w-full overflow-hidden rounded-lg shadow-sm transition-all hover:ml-0 hover:mt-0 hover:rounded-none hover:shadow-none lg:-mt-6 lg:-ml-6">
                                <img src="/img/hero-img-01.jpg" alt="Omar ali" className="h-full w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </SiteContainer>
        </header>
    );
}
