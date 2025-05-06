import AboutSection from '@/components/pks/sections/about-section';
import AgendaSection from '@/components/pks/sections/agenda-section';
import GallerySection from '@/components/pks/sections/gallery-section';
import IntegrationSection from '@/components/pks/sections/integration-section';
import LeadershipSection from '@/components/pks/sections/leadership-section';
import MapSection from '@/components/pks/sections/map-section';
import NewsSection from '@/components/pks/sections/news-section';
import PksLayout from '@/layouts/pks-layout';
import { Head } from '@inertiajs/react';

export default function Home({ slides, about, leaders, blogs }) {
    return (
        <>
            <Head title="" />
            <PksLayout slides={slides}>
                <main>
                    <AboutSection about={about} />
                    <LeadershipSection leaders={leaders} />
                    <NewsSection blogs={blogs} />
                    <AgendaSection />
                    <MapSection />
                    <GallerySection />
                    <IntegrationSection />
                </main>
            </PksLayout>
        </>
    );
}
