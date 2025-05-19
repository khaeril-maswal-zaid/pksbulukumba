import Footer from '@/components/pks/footer';
import GalleryContent from '@/components/pks/gallery/gallery-content';
import Navbar from '@/components/pks/navbar';
import LeadershipSidebar from '@/components/pks/news/leadership-sidebar';

export default function GalleryPage({ gallery }) {
    return (
        <>
            <Navbar />
            <div className="mb-7 min-h-screen bg-white">
                {/* Breadcrumb */}
                <div className="border-b bg-gray-50 py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center text-sm text-gray-600">
                            <a href="/" className="hover:text-[#F47C20]">
                                Beranda
                            </a>
                            <span className="mx-2">/</span>
                            <span className="font-medium text-gray-900">Galeri</span>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-8">
                    <div className="relative flex flex-col gap-8 lg:flex-row">
                        {/* Main Content - Left Column */}
                        <div className="lg:w-2/3">
                            <h1 className="mb-8 text-3xl font-bold md:text-4xl">Galeri Kegiatan</h1>
                            <GalleryContent gallery={gallery} />
                        </div>

                        {/* Sidebar - Right Column */}
                        <div className="mt-8 h-[600px] lg:sticky lg:top-20 lg:mt-0 lg:w-1/3 lg:self-start">
                            <LeadershipSidebar />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
