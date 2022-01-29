import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageContainer from './PageContainer';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_FORMATED, NAV_LINKS, SOCIAL_LINKS } from '../data/data';
import ContactMeCTA from './ContactMeCTA';

export default function Navbar() {
    const navbarRef = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // TODO: needs improvement (use debounce for better performance)
        const onScroll = (e) => {
            if (e.target.documentElement.scrollTop > 50) {
                navbarRef.current.classList.add('floating');
            } else {
                navbarRef.current.classList.remove('floating');
            }
        };
        window.addEventListener('load', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('load', onScroll);
            window.removeEventListener('scroll', onScroll);
        };
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
                className="site-navbar fixed inset-x-0 z-50 h-16 bg-amber-50 duration-300 md:h-20 lg:h-24"
                ref={navbarRef}
                style={{ transitionProperty: 'box-shadow, height' }}
            >
                <PageContainer className="flex h-full items-center">
                    <div>
                        <Link href="/">
                            <a className="site-brand flex items-center font-semibold">
                                <span className="text-xl tracking-wide text-slate-700 md:text-2xl">OMAR</span>
                                <span className="-rotate-6 text-2xl tracking-wide text-amber-400 md:text-3xl">X</span>
                                <span className="text-xl tracking-wide text-slate-700 md:text-2xl">CODER</span>
                            </a>
                        </Link>
                    </div>

                    <div className="ml-auto hidden items-center space-x-8 tracking-widest md:flex">
                        {NAV_LINKS.map((link, index) => {
                            if (!link.hideIn.includes(router.pathname)) {
                                return (
                                    <Link href={link.url} key={index}>
                                        <a className="text-lg text-slate-700 transition-colors duration-300 hover:text-amber-400">
                                            {link.label}
                                        </a>
                                    </Link>
                                );
                            }
                        })}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-lg text-slate-700 transition-colors duration-300 hover:text-amber-400"
                        >
                            Contact
                        </a>
                    </div>
                    <div className="ml-auto md:hidden">
                        <button
                            className="text-slate-700 transition-colors hover:text-amber-400"
                            onClick={() => setMenuOpen(true)}
                        >
                            <i className="fas fa-lg fa-fw fa-bars"></i>
                        </button>
                    </div>
                </PageContainer>
            </nav>
            <aside
                className={`app-menu fixed inset-y-0 z-50 bg-slate-50 p-4 duration-300 md:hidden ${
                    menuOpen ? 'left-0 right-0' : '-left-full right-full'
                }`}
                style={{ transitionProperty: 'left, right' }}
            >
                <div className="absolute right-0 top-0 flex justify-end md:hidden">
                    <button
                        className="p-4 text-amber-500 transition-colors hover:text-amber-400"
                        onClick={() => setMenuOpen(false)}
                    >
                        <i className="fas fa-fw fa-times text-4xl"></i>
                    </button>
                </div>
                <div className="flex h-full flex-col items-center justify-center">
                    {NAV_LINKS.map((link, index) => {
                        if (!link.hideIn.includes(router.pathname)) {
                            return (
                                <Link href={link.url} key={index}>
                                    <a
                                        className="mb-8 text-3xl tracking-widest text-slate-400 transition-colors duration-300 hover:text-amber-400 sm:mb-16"
                                        onClick={navigate}
                                    >
                                        {link.label}
                                    </a>
                                </Link>
                            );
                        }
                    })}

                    <div className="my-8 flex items-center space-x-6 sm:space-x-8">
                        {SOCIAL_LINKS.map((link, index) => (
                            <a
                                href={link.url}
                                title={link.label}
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-800 transition-colors duration-300 hover:text-amber-400"
                            >
                                <i className={`${link.icon} text-3xl`}></i>
                            </a>
                        ))}

                        <a
                            href={`https://wa.me/${CONTACT_PHONE}?text=Hi%20Omar`}
                            title={CONTACT_PHONE_FORMATED}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-800 transition-colors duration-300 hover:text-amber-400"
                        >
                            <i className="fab fa-fw fa-whatsapp text-3xl"></i>
                        </a>
                    </div>

                    <ContactMeCTA />
                </div>
            </aside>
        </>
    );
}
