import ContactMeCTA from '../components/ContactMeCTA';
import PageHeader from '../components/PageHeader';

export default function Notfound() {
    return (
        <main className="flex flex-1 flex-col">
            <PageHeader heading="Not Found" className="flex-1">
                <div className="my-16 text-center md:my-20">
                    <h1 className="mb-8 text-xl leading-7 text-slate-500 md:text-2xl">
                        Sorry, The content you are looking for can&apos;t be found. If you have any issues with the
                        website please leave me a message.
                    </h1>
                    <ContactMeCTA />
                </div>
            </PageHeader>
        </main>
    );
}
