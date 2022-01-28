import { CONTACT_EMAIL } from '../data/data';

export default function ContactMeCTA({ label, className }) {
    const text = label ?? 'Send me a message';
    const classProp = className ?? '';

    return (
        <a
            href={`mailto:${CONTACT_EMAIL}`}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-primary uppercase ${classProp}`}
        >
            <i className="fas fa-envelope-open-text mr-3"></i>
            <span>{text}</span>
        </a>
    );
}
