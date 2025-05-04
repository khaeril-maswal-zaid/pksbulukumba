export default function OrganizationChartSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <div className="bg-[#F47C20] text-white py-4 px-6 rounded-t-lg">
        <h2 className="text-xl font-bold text-center">Bagan Struktur Organisasi</h2>
      </div>

      <div className="p-4 lg:overflow-auto lg:max-h-[calc(100vh-120px)]">
        {/* Organization Chart */}
        <div className="relative w-full bg-white rounded-lg border border-gray-200 p-4">
          {/* Ketua */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-40 p-3 bg-[#F47C20] text-white text-center rounded-lg shadow-md">
              <p className="font-bold">Ketua DPD</p>
              <p className="text-sm">H. Ahmad Fauzan, S.H.</p>
            </div>
            <div className="h-6 w-0.5 bg-gray-400"></div>
          </div>

          {/* Sekretaris & Bendahara */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-36 p-2 bg-[#F47C20]/90 text-white text-center rounded-lg shadow-md">
                <p className="font-bold">Sekretaris</p>
                <p className="text-xs">Hj. Siti Rahmah, M.Pd.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-36 p-2 bg-[#F47C20]/90 text-white text-center rounded-lg shadow-md">
                <p className="font-bold">Bendahara</p>
                <p className="text-xs">H. Muhammad Ridwan, S.E.</p>
              </div>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="relative h-6 mb-2">
            <div className="absolute left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 h-6 w-0.5 bg-gray-400"></div>
          </div>

          {/* Bidang-bidang */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Pembinaan Kader</p>
                <p className="text-xs">Dr. Abdul Hakim, M.Si.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Pemenangan Pemilu</p>
                <p className="text-xs">Ir. Andi Syamsuddin</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Perempuan</p>
                <p className="text-xs">Hj. Nurhayati, S.Pd.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Kepemudaan</p>
                <p className="text-xs">Muh. Arif, S.Sos.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Dakwah</p>
                <p className="text-xs">H. Burhanuddin, Lc.</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full p-2 bg-[#F47C20]/80 text-white text-center rounded-lg shadow-md">
                <p className="font-bold text-sm">Bidang Kesra</p>
                <p className="text-xs">Dra. Andi Fatmawati</p>
              </div>
            </div>
          </div>

          {/* DPC Section */}
          <div className="mt-8 pt-6 border-t border-gray-300">
            <h3 className="text-center font-bold mb-4">DPC PKS Kecamatan</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Ujung Bulu</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Ujung Loe</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Gantarang</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Kindang</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Bulukumpa</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Rilau Ale</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Herlang</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Kajang</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Bontotiro</p>
              </div>
              <div className="p-2 bg-gray-100 text-center rounded-lg shadow-sm">
                <p className="font-medium text-sm">DPC Bonto Bahari</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-4 text-center">
          <button className="px-4 py-2 bg-[#F47C20] text-white rounded-md hover:bg-[#e06b15]">
            Unduh Bagan Struktur
          </button>
        </div>
      </div>
    </div>
  )
}
