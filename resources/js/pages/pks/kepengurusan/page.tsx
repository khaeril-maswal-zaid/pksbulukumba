import OrganizationChartSidebar from '@/components/pks/structure/organization-chart-sidebar';
import StructureContent from '@/components/pks/structure/structure-content';
import PksLayout from '@/layouts/pks-layout';
import { Head } from '@inertiajs/react';

export const metadata = {
    title: 'Struktur Kepengurusan - PKS Bulukumba',
    description: 'Struktur kepengurusan lengkap DPD PKS Bulukumba',
};

export default function StructurePage() {
    return (
        <>
            <Head title={`Blog`} />
            <PksLayout>
                <div className="min-h-screen bg-white">
                    {/* Breadcrumb */}
                    <div className="border-b bg-gray-50 py-4">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center text-sm text-gray-600">
                                <a href="/" className="hover:text-[#F47C20]">
                                    Beranda
                                </a>
                                <span className="mx-2">/</span>
                                <span className="font-medium text-gray-900">Struktur Kepengurusan</span>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-8">
                        <div className="relative flex flex-col gap-8 lg:flex-row">
                            {/* Main Content - Left Column */}
                            <div className="lg:w-2/3">
                                <h1 className="mb-8 text-3xl font-bold md:text-4xl">Struktur Kepengurusan</h1>
                                <StructureContent />
                            </div>

                            {/* Sidebar - Right Column */}
                            <div className="mt-8 lg:sticky lg:top-20 lg:mt-0 lg:w-1/3 lg:self-start">
                                <OrganizationChartSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </PksLayout>
        </>
    );
}
