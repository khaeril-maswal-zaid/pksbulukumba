export default function MapSection() {
  return (
    <section id="peta" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-black">Peta Dapil (Daerah Pemilihan)</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Peta daerah pemilihan (Dapil) PKS Bulukumba mencakup seluruh wilayah Kabupaten Bulukumba yang terbagi
            menjadi 5 daerah pemilihan untuk DPRD Kabupaten.
          </p>
        </div>

        {/* Embedded Google Maps with Satellite View */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254932.30496509096!2d119.9651886!3d-5.4334264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee8c5aabd5c97%3A0x3030bfbcaf77040!2sKabupaten%20Bulukumba%2C%20Sulawesi%20Selatan!5e1!3m2!1sid!2sid!4v1714717800!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Kabupaten Bulukumba"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Redesigned Electoral Districts Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Daerah Pemilihan (Dapil) Kabupaten Bulukumba</h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Dapil 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-[#F47C20]">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#F47C20]/10 text-[#F47C20] font-bold text-xl">
                  1
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">Dapil 1</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-center">Kecamatan Ujung Bulu</p>
                  <p className="text-gray-700 text-center">Kecamatan Ujung Loe</p>
                  <p className="text-sm text-gray-500 text-center">9 Kursi DPRD</p>
                  <p className="text-xs text-gray-500 text-center">Jumlah Pemilih: ~25.000</p>
                </div>
              </div>
            </div>

            {/* Dapil 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-[#F47C20]">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#F47C20]/10 text-[#F47C20] font-bold text-xl">
                  2
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">Dapil 2</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-center">Kecamatan Gantarang</p>
                  <p className="text-gray-700 text-center">Kecamatan Kindang</p>
                  <p className="text-sm text-gray-500 text-center">9 Kursi DPRD</p>
                  <p className="text-xs text-gray-500 text-center">Jumlah Pemilih: ~45.000</p>
                </div>
              </div>
            </div>

            {/* Dapil 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-[#F47C20]">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#F47C20]/10 text-[#F47C20] font-bold text-xl">
                  3
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">Dapil 3</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-center">Kecamatan Bulukumpa</p>
                  <p className="text-gray-700 text-center">Kecamatan Rilau Ale</p>
                  <p className="text-sm text-gray-500 text-center">9 Kursi DPRD</p>
                  <p className="text-xs text-gray-500 text-center">Jumlah Pemilih: ~35.000</p>
                </div>
              </div>
            </div>

            {/* Dapil 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-[#F47C20]">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#F47C20]/10 text-[#F47C20] font-bold text-xl">
                  4
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">Dapil 4</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-center">Kecamatan Herlang</p>
                  <p className="text-gray-700 text-center">Kecamatan Kajang</p>
                  <p className="text-sm text-gray-500 text-center">9 Kursi DPRD</p>
                  <p className="text-xs text-gray-500 text-center">Jumlah Pemilih: ~40.000</p>
                </div>
              </div>
            </div>

            {/* Dapil 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-[#F47C20]">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-[#F47C20]/10 text-[#F47C20] font-bold text-xl">
                  5
                </div>
                <h4 className="text-lg font-semibold text-center mb-3">Dapil 5</h4>
                <div className="space-y-2">
                  <p className="text-gray-700 text-center">Kecamatan Bontotiro</p>
                  <p className="text-gray-700 text-center">Kecamatan Bonto Bahari</p>
                  <p className="text-sm text-gray-500 text-center">9 Kursi DPRD</p>
                  <p className="text-xs text-gray-500 text-center">Jumlah Pemilih: ~38.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-[#F47C20] p-4">
            <p className="text-center text-[#F47C20] font-medium">
              <span className="font-bold">Total Kursi DPRD Kabupaten Bulukumba:</span> 45 Kursi
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
