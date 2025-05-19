export default function OrganizationChartSidebar() {
    return (
        <div className="h-full rounded-lg bg-white shadow-md shadow-amber-700">
            <div className="rounded-t-lg px-6 py-4">
                <h2 className="text-center text-xl font-bold">Bagan Struktur Organisasi</h2>
            </div>

            <div className="p-4 lg:max-h-[calc(100vh-120px)] lg:overflow-auto">
                {/* Organization Chart */}
                <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
                    <img src={`/storage/image/assets/bagan-struktur.jpg`} alt="Bagan Struktur" />
                </div>

                {/* Download Button */}
                <div className="mt-4 text-center">
                    <button className="rounded-md bg-[#F47C20] px-4 py-2 text-white hover:bg-[#e06b15]">Unduh Bagan Struktur</button>
                </div>
            </div>
        </div>
    );
}
