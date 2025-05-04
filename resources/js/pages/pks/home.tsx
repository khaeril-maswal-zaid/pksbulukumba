import Footer from '@/components/pks/footer';
import Navbar from '@/components/pks/navbar';
import AboutSection from '@/components/pks/sections/about-section';
import AgendaSection from '@/components/pks/sections/agenda-section';
import GallerySection from '@/components/pks/sections/gallery-section';
import HeroSection from '@/components/pks/sections/hero-section';
import IntegrationSection from '@/components/pks/sections/integration-section';
import LeadershipSection from '@/components/pks/sections/leadership-section';
import MapSection from '@/components/pks/sections/map-section';
import NewsSection from '@/components/pks/sections/news-section';

export default function Home({ slides, leaders }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <HeroSection slides={slides} />
                <AboutSection />
                <LeadershipSection leaders={leaders} />
                <NewsSection />
                <AgendaSection />
                <MapSection />
                <GallerySection />
                <IntegrationSection />
            </main>
            <Footer />
        </div>
    );
}
