import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_FORMATED } from '../../data/data';
import ContactMeCTA from '../ContactMeCTA';
import PageSection from '../PageSection';

export default function ContactMeSection() {
    return (
        <PageSection id="contact" className="bg-amber-50">
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold capitalize tracking-wider text-slate-800 md:text-4xl">
                        In need of a developer?
                    </h1>
                    <p className="mt-3 tracking-wider text-amber-400 md:text-lg">
                        I&apos;m currently available for freelance work.
                    </p>
                    <div className="mt-8">
                        <ContactMeCTA label={<span>Let&apos;s work together</span>} />
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex items-center tracking-wide">
                        <i className="fab fa-lg fa-fw fa-whatsapp text-slate-400"></i>
                        <a
                            href={`https://wa.me/${CONTACT_PHONE}?text=Hi%20Omar`}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 text-xl text-slate-400 transition-colors duration-300 hover:text-amber-400"
                        >
                            {CONTACT_PHONE_FORMATED}
                        </a>
                    </div>
                    <div className="mt-3 flex items-center tracking-wider">
                        <i className="fas fa-lg fa-fw fa-envelope-open-text text-slate-400"></i>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            target="_blank"
                            rel="noreferrer"
                            className="ml-2 text-xl lowercase text-slate-400 transition-colors duration-300 hover:text-amber-400"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
            </div>
        </PageSection>
    );
}
