import { SOCIAL_LINKS } from '../data/data';

export default function SiteFooter() {
    return (
        <footer className="flex flex-col items-center bg-slate-900 py-12">
            <div className="mb-8 flex items-center space-x-8">
                {SOCIAL_LINKS.map((link, index) => (
                    <a
                        href={link.url}
                        title={link.label}
                        key={index}
                        className="text-amber-400 transition-colors duration-300 hover:text-amber-200"
                    >
                        <i className={`${link.icon} text-3xl`}></i>
                    </a>
                ))}
            </div>
            <div className="">
                <h6 className="text-lg font-medium tracking-wider text-slate-400">&copy;2022 Omar Ali.</h6>
            </div>
        </footer>
    );
}
