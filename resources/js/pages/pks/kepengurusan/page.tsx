import Navbar from "@/components/pks/navbar"
import Footer from "@/components/pks/footer"
import StructureContent from "@/components/pks/structure/structure-content"
import OrganizationChartSidebar from "@/components/pks/structure/organization-chart-sidebar"

export const metadata = {
  title: "Struktur Kepengurusan - PKS Bulukumba",
  description: "Struktur kepengurusan lengkap DPD PKS Bulukumba",
}

export default function StructurePage() {
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
              <span className="text-gray-900 font-medium">Struktur Kepengurusan</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content - Left Column */}
            <div className="lg:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Struktur Kepengurusan</h1>
              <StructureContent />
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:w-1/3 mt-8 lg:mt-0 lg:sticky lg:top-20 lg:self-start">
              <OrganizationChartSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
