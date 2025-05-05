import AboutSection from '@/components/pks/sections/about-section';
import AgendaSection from '@/components/pks/sections/agenda-section';
import GallerySection from '@/components/pks/sections/gallery-section';
import HeroSection from '@/components/pks/sections/hero-section';
import IntegrationSection from '@/components/pks/sections/integration-section';
import LeadershipSection from '@/components/pks/sections/leadership-section';
import MapSection from '@/components/pks/sections/map-section';
import NewsSection from '@/components/pks/sections/news-section';
import PksLayout from '@/layouts/pks-layout';

export default function Home({ slides, about, leaders, blogs }) {
    return (
        <PksLayout>
            {/* <div className="min-h-screen bg-white"> */}
            <main>
                <HeroSection slides={slides} />
                <AboutSection about={about} />
                <LeadershipSection leaders={leaders} />
                <NewsSection blogs={blogs} />
                <AgendaSection />
                <MapSection />
                <GallerySection />
                <IntegrationSection />
            </main>
            {/* </div> */}
        </PksLayout>
    );
}
