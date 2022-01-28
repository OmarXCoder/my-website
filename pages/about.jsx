import PageHeader from '../components/PageHeader';
import ContactMeCTA from '../components/ContactMeCTA';

export default function About() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHeader heading="About Me" className="flex-1">
                <div className="my-16 text-justify leading-7 text-slate-500 md:my-20">
                    Hello, I am <strong className="font-semibold">Omar Ali,</strong> a full-stack web &amp; mobile
                    developer. I have a <strong className="font-semibold">B.A. degree</strong> in Computer Science. With{' '}
                    <strong className="font-semibold">7+ years</strong> experience writing clean code. I spend most of
                    my day, experimenting with HTML, CSS, JavaScript, PHP and a long list of languages and frameworks. I
                    enjoy coding and the challenge of learning something new everyday.
                </div>
                <div className="text-center">
                    <ContactMeCTA />
                </div>
            </PageHeader>
        </main>
    );
}
