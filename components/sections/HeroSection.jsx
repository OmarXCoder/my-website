import Link from 'next/link';
import { SOCIAL_LINKS } from '../../data/data';
import ContactMeCTA from '../ContactMeCTA';
import PageContainer from '../PageContainer';

export default function HeroSection() {
    return (
        <header className="flex h-screen flex-col bg-amber-50 pt-16 md:pt-20" id="home">
            <PageContainer className="flex flex-1 items-center">
                <div className="flex flex-1 items-center justify-center text-center sm:px-6 md:justify-start md:text-left lg:px-12">
                    <div className="max-w-xl flex-1 md:mr-auto">
                        {/* Welcome */}
                        <div className="flex items-end justify-center md:justify-start">
                            <h5 className="mr-2 tracking-wide text-slate-500 md:text-xl">Hi There, I&apos;m Omar</h5>
                            <img
                                src="/img/icon/waving-hand-skin-1.svg"
                                alt="wave icon"
                                className="h-8 w-8 md:h-10 md:w-10"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="my-4 font-sans text-2xl font-bold capitalize leading-snug tracking-wider text-slate-800 sm:text-3xl lg:text-4xl">
                            A Freelance Full-Stack Web &amp; Mobile Developer
                        </h1>

                        {/* Tagline */}
                        <p className="font-light text-slate-500 md:text-lg md:tracking-wider">
                            As a full-stack web &amp; mobile developer, I help people and companies build websites, apps
                            and services that are simple, beautiful and easy to use.
                        </p>

                        {/* Call to action */}
                        <div className="mt-6 md:mt-8">
                            <ContactMeCTA className="mt-3 sm:mt-0" />
                            <Link href="/about">
                                <a className="btn btn-ghost mt-3 uppercase underline sm:mt-0">More about me</a>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 flex items-center justify-center space-x-6 md:justify-start">
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
                    {/* Photo */}
                    <div className="ml-12 hidden md:block">
                        <div className="h-[380px] w-[220px] rounded-lg border-4 border-amber-400 lg:h-[480px] lg:w-[320px]">
                            <div className="-mt-4 -ml-4 h-full w-full overflow-hidden rounded-lg shadow-sm transition-all hover:ml-0 hover:mt-0 hover:rounded-none hover:shadow-none lg:-mt-6 lg:-ml-6">
                                <img src="/img/hero-img-01.jpg" alt="Omar ali" className="h-full w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </header>
    );
}
