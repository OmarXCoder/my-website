import Head from 'next/head';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import ServicesSection from '../components/sections/ServicesSection';
import SkillsSection from '../components/sections/SkillsSection';
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
    return (
        <main>
            <Head>
                <title>Omar Ali | Home</title>
            </Head>

            <HeroSection />
            <ServicesSection />
            <FeaturedProjectsSection />
            <SkillsSection />
        </main>
    );
}
