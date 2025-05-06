export default function MapSection() {
    return (
        <section id="peta" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-3xl font-bold text-black">Peta Dapil (Daerah Pemilihan)</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                    <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                        Peta daerah pemilihan (Dapil) PKS Bulukumba mencakup seluruh wilayah Kabupaten Bulukumba yang terbagi menjadi 5 daerah
                        pemilihan untuk DPRD Kabupaten.
                    </p>
                </div>

                {/* Embedded Google Maps with Satellite View */}
                <div className="mb-10 h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224124.1036928706!2d120.29996613139163!3d-5.459258653542592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbc017ea85a2b0b%3A0x3030bfbcaf76fb0!2sKabupaten%20Bulukumba%2C%20Sulawesi%20Selatan!5e1!3m2!1sid!2sid!4v1746404674336!5m2!1sid!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 1 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Redesigned Electoral Districts Section */}
                <div className="mt-12">
                    <h3 className="mb-8 text-center text-2xl font-bold">Daerah Pemilihan (Dapil) Kabupaten Bulukumba</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
                        {/* Dapil 1 */}
                        <div className="overflow-hidden rounded-xl border-t-4 border-[#F47C20] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F47C20]/10 text-xl font-bold text-[#F47C20]">
                                    1
                                </div>
                                <h4 className="mb-3 text-center text-lg font-semibold">Dapil 1</h4>
                                <div className="space-y-2">
                                    <p className="text-center text-gray-700">Kecamatan Ujung Bulu</p>
                                    <p className="text-center text-gray-700">Kecamatan Ujung Loe</p>
                                    <p className="text-center text-sm text-gray-500">2 Legislator PKS dari 9 kursi</p>
                                    <p className="text-center text-xs text-gray-500">Jumlah Pemilih: ~25.000</p>
                                </div>
                            </div>
                        </div>

                        {/* Dapil 2 */}
                        <div className="overflow-hidden rounded-xl border-t-4 border-[#F47C20] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F47C20]/10 text-xl font-bold text-[#F47C20]">
                                    2
                                </div>
                                <h4 className="mb-3 text-center text-lg font-semibold">Dapil 2</h4>
                                <div className="space-y-2">
                                    <p className="text-center text-gray-700">Kecamatan Gantarang</p>
                                    <p className="text-center text-gray-700">Kecamatan Kindang</p>
                                    <p className="text-center text-sm text-gray-500">2 Legislator PKS dari 10 kursi</p>
                                    <p className="text-center text-xs text-gray-500">Jumlah Pemilih: ~45.000</p>
                                </div>
                            </div>
                        </div>

                        {/* Dapil 3 */}
                        <div className="overflow-hidden rounded-xl border-t-4 border-[#F47C20] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F47C20]/10 text-xl font-bold text-[#F47C20]">
                                    3
                                </div>
                                <h4 className="mb-3 text-center text-lg font-semibold">Dapil 3</h4>
                                <div className="space-y-2">
                                    <p className="text-center text-gray-700">Kecamatan Bulukumpa</p>
                                    <p className="text-center text-gray-700">Kecamatan Rilau Ale</p>
                                    <p className="text-center text-sm text-gray-500">2 Legislator PKS dari 9 kursi</p>
                                    <p className="text-center text-xs text-gray-500">Jumlah Pemilih: ~35.000</p>
                                </div>
                            </div>
                        </div>

                        {/* Dapil 4 */}
                        <div className="overflow-hidden rounded-xl border-t-4 border-[#F47C20] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F47C20]/10 text-xl font-bold text-[#F47C20]">
                                    4
                                </div>
                                <h4 className="mb-3 text-center text-lg font-semibold">Dapil 4</h4>
                                <div className="space-y-2">
                                    <p className="text-center text-gray-700">Kecamatan Herlang</p>
                                    <p className="text-center text-gray-700">Kecamatan Kajang</p>
                                    <p className="text-center text-sm text-gray-500">1 Legislator PKS dari 7 kursi</p>
                                    <p className="text-center text-xs text-gray-500">Jumlah Pemilih: ~40.000</p>
                                </div>
                            </div>
                        </div>

                        {/* Dapil 5 */}
                        <div className="overflow-hidden rounded-xl border-t-4 border-[#F47C20] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                            <div className="p-6">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F47C20]/10 text-xl font-bold text-[#F47C20]">
                                    5
                                </div>
                                <h4 className="mb-3 text-center text-lg font-semibold">Dapil 5</h4>
                                <div className="space-y-2">
                                    <p className="text-center text-gray-700">Kecamatan Bontotiro</p>
                                    <p className="text-center text-gray-700">Kecamatan Bonto Bahari</p>
                                    <p className="text-center text-sm text-gray-500">5 Kursi DPRD</p>
                                    <p className="text-center text-xs text-gray-500">1 Legislator PKS dari 5 kursi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border border-[#F47C20] p-4">
                        <p className="text-center font-medium text-[#F47C20]">
                            <span className="font-bold">Total Kursi DPRD Kabupaten Bulukumba:</span> 40 Kursi
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
