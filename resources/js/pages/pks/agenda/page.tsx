import Navbar from "@/components/pks/navbar"
import Footer from "@/components/pks/footer"
import AgendaContent from "@/components/pks/agenda/agenda-content"
import LeadershipSidebar from "@/components/pks/news/leadership-sidebar"

export default function AgendaPage() {
  
  const metadata = {
    title: "Agenda Kegiatan - PKS Bulukumba",
    description: "Daftar lengkap agenda kegiatan PKS Bulukumba",
  }

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-[#F47C20]">
                Beranda
              </a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Agenda Kegiatan</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content - Left Column */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Agenda Kegiatan</h1>
              <AgendaContent />
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:w-1/3 mt-8 lg:mt-0 lg:sticky lg:top-20 lg:self-start h-[600px]">
              <LeadershipSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
