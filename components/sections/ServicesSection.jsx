import SiteSection from '../SiteSection';
import ServiceCard from '../ServiceCard';
import { SERVICES } from '../../data/data';

export default function ServicesSection() {
    return (
        <SiteSection id="servicesSection" heading="Ways I can help you" className="bg-slate-50">
            <div className="mt-14 grid gap-6 sm:mt-20 md:grid-cols-3 md:gap-4 lg:gap-6">
                {SERVICES.map((service, index) => (
                    <ServiceCard service={service} className="mx-auto max-w-md lg:max-w-max" key={index} />
                ))}
            </div>
        </SiteSection>
    );
}
