import { Card } from "@/components/ui/card"
import { Image } from "lucide-react"

const leadershipData = [
  {
    id: 1,
    name: "H. Ahmad Fauzan, S.H.",
    position: "Ketua DPD PKS Bulukumba",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Memimpin DPD PKS Bulukumba sejak tahun 2020. Aktif dalam berbagai kegiatan sosial dan politik di Kabupaten Bulukumba.",
  },
  {
    id: 2,
    name: "Hj. Siti Rahmah, M.Pd.",
    position: "Sekretaris DPD PKS Bulukumba",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas administrasi dan kesekretariatan DPD PKS Bulukumba. Juga aktif dalam bidang pendidikan dan pemberdayaan perempuan.",
  },
  {
    id: 3,
    name: "H. Muhammad Ridwan, S.E.",
    position: "Bendahara DPD PKS Bulukumba",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Mengelola keuangan DPD PKS Bulukumba. Seorang pengusaha sukses yang aktif mendukung program pemberdayaan ekonomi masyarakat.",
  },
  {
    id: 4,
    name: "Dr. Abdul Hakim, M.Si.",
    position: "Ketua Bidang Pembinaan Kader",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas pembinaan dan pengembangan kader PKS Bulukumba. Memiliki pengalaman lebih dari 15 tahun dalam bidang pengkaderan.",
  },
  {
    id: 5,
    name: "Ir. Andi Syamsuddin",
    position: "Ketua Bidang Pemenangan Pemilu",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas strategi dan pelaksanaan pemenangan pemilu. Memiliki pengalaman sebagai tim sukses dalam beberapa pemilihan umum.",
  },
  {
    id: 6,
    name: "Hj. Nurhayati, S.Pd.",
    position: "Ketua Bidang Perempuan dan Ketahanan Keluarga",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas program-program yang berkaitan dengan pemberdayaan perempuan dan ketahanan keluarga.",
  },
  {
    id: 7,
    name: "Muh. Arif, S.Sos.",
    position: "Ketua Bidang Kepemudaan",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas program-program kepemudaan dan pengembangan potensi pemuda di Kabupaten Bulukumba.",
  },
  {
    id: 8,
    name: "H. Burhanuddin, Lc.",
    position: "Ketua Bidang Dakwah",
    image: "/placeholder.svg?height=400&width=300",
    description: "Bertanggung jawab atas program-program dakwah dan keagamaan. Lulusan Universitas Al-Azhar, Kairo.",
  },
  {
    id: 9,
    name: "Dra. Andi Fatmawati",
    position: "Ketua Bidang Kesejahteraan Rakyat",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "Bertanggung jawab atas program-program kesejahteraan rakyat, termasuk bantuan sosial dan pemberdayaan ekonomi masyarakat.",
  },
]

export default function StructureContent() {
  return (
    <div>
      {/* Leadership Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipData.map((leader) => (
          <Card key={leader.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-[#F47C20] mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-1">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            &laquo; Sebelumnya
          </button>
          <button className="px-4 py-2 bg-[#F47C20] text-white rounded-md">1</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">2</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            Selanjutnya &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}
