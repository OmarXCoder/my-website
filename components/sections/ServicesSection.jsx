import PageSection from '../PageSection';
import ServiceCard from '../ServiceCard';
import { SERVICES } from '../../data/data';

export default function ServicesSection() {
    return (
        <PageSection id="services" heading="Ways I can help you" className="bg-slate-50">
            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-4 lg:gap-6">
                {SERVICES.map((service, index) => (
                    <ServiceCard service={service} className="mx-auto max-w-md lg:max-w-max" key={index} />
                ))}
            </div>
        </PageSection>
    );
}
