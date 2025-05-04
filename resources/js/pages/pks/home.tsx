import Navbar from "@/components/pks/navbar"
import HeroSection from "@/components/pks/sections/hero-section"
import AboutSection from "@/components/pks/sections/about-section"
import NewsSection from "@/components/pks/sections/news-section"
import AgendaSection from "@/components/pks/sections/agenda-section"
import MapSection from "@/components/pks/sections/map-section"
import LeadershipSection from "@/components/pks/sections/leadership-section"
import GallerySection from "@/components/pks/sections/gallery-section"
import IntegrationSection from "@/components/pks/sections/integration-section"
import Footer from "@/components/pks/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <NewsSection />
        <AgendaSection />
        <MapSection />
        <GallerySection />
        <IntegrationSection />
      </main>
      <Footer />
    </div>
  )
}
