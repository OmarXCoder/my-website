import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import SkillsSection from '../components/sections/SkillsSection';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import ContactMeSection from '../components/sections/ContactMeSection';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ServicesSection />
            <SkillsSection />
            <FeaturedProjectsSection />
            <ContactMeSection />
        </main>
    );
}
