import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SiteContainer from './SiteContainer';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/data';

export default function Navbar() {
    const navbarRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onScroll = (e) => {
            if (e.target.documentElement.scrollTop > 100) {
                navbarRef.current.classList.add('floating');
            } else {
                navbarRef.current.classList.remove('floating');
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navigate = (e) => {
        e.preventDefault();
        setMenuOpen(false);
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 300);
    };

    return (
        <>
            <nav
                className="site-navbar fixed inset-x-0 z-50 h-20 duration-300 md:h-24"
                ref={navbarRef}
                style={{ transitionProperty: 'background-color, box-shadow, height' }}
            >
                <SiteContainer className="flex h-full items-center">
                    <div>
                        <Link href="/">
                            <a className="site-brand flex items-center font-semibold">
                                <span className="text-xl tracking-wide text-slate-700 md:text-2xl">OMAR</span>
                                <span className="-rotate-6 text-3xl tracking-wide text-amber-400 md:text-4xl">X</span>
                                <span className="text-xl tracking-wide text-slate-700 md:text-2xl">CODER</span>
                            </a>
                        </Link>
                    </div>

                    <div className="ml-auto hidden items-center space-x-8 tracking-widest md:flex">
                        {NAV_LINKS.map((link, index) => {
                            if (link.hideIn !== router.pathname) {
                                return (
                                    <Link href={link.url} key={index}>
                                        <a className="text-lg text-slate-700 transition-colors duration-300 hover:text-amber-400">
                                            {link.label}
                                        </a>
                                    </Link>
                                );
                            }
                        })}
                    </div>
                    <div className="ml-auto md:hidden">
                        <button
                            className="text-slate-700 transition-colors hover:text-amber-400"
                            onClick={() => setMenuOpen(true)}
                        >
                            <i className="fas fa-lg fa-fw fa-bars"></i>
                        </button>
                    </div>
                </SiteContainer>
            </nav>
            <aside
                className={`app-menu fixed inset-y-0 z-50 bg-slate-50 p-4 duration-300 md:hidden ${
                    menuOpen ? 'left-0 right-0' : '-left-full right-full'
                }`}
                style={{ transitionProperty: 'left, right' }}
            >
                <div className="flex justify-end md:hidden">
                    <button
                        className="text-amber-500 transition-colors hover:text-amber-400"
                        onClick={() => setMenuOpen(false)}
                    >
                        <i className="fas fa-3x fa-fw fa-times"></i>
                    </button>
                </div>
                <div className="flex h-full flex-col items-center justify-center">
                    {NAV_LINKS.map((link, index) => {
                        if (link.hideIn !== router.pathname) {
                            return (
                                <Link href={link.url} key={index}>
                                    <a
                                        className="mb-14 text-3xl tracking-widest text-slate-400 transition-colors duration-300 hover:text-amber-400"
                                        onClick={navigate}
                                    >
                                        {link.label}
                                    </a>
                                </Link>
                            );
                        }
                    })}

                    <div className="mt-14 flex items-center space-x-8">
                        {SOCIAL_LINKS.map((link, index) => (
                            <a
                                href={link.url}
                                title={link.label}
                                key={index}
                                className="text-slate-800 transition-colors duration-300 hover:text-amber-400"
                            >
                                <i className={`${link.icon} text-3xl`}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}