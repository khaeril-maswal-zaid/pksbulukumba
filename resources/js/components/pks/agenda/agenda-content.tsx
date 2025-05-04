import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const agendaItems = [
  {
    id: 1,
    title: "Rapat Koordinasi Kader PKS Bulukumba",
    date: "15 Mei 2023",
    time: "09:00 - 12:00 WITA",
    location: "Kantor DPD PKS Bulukumba",
    description: "Rapat koordinasi seluruh kader PKS Bulukumba untuk membahas program kerja semester II tahun 2023.",
  },
  {
    id: 2,
    title: "Pelatihan Kepemimpinan Dasar",
    date: "20-21 Mei 2023",
    time: "08:00 - 16:00 WITA",
    location: "Aula Kantor Bupati Bulukumba",
    description: "Pelatihan kepemimpinan dasar untuk kader muda PKS Bulukumba dengan pemateri dari DPP PKS.",
  },
  {
    id: 3,
    title: "Bakti Sosial dan Pengobatan Gratis",
    date: "27 Mei 2023",
    time: "08:00 - 14:00 WITA",
    location: "Desa Bontotiro, Kec. Bontotiro",
    description: "Kegiatan bakti sosial berupa pengobatan gratis dan pembagian sembako untuk masyarakat kurang mampu.",
  },
  {
    id: 4,
    title: "Dialog Publik: Ekonomi Kerakyatan",
    date: "5 Juni 2023",
    time: "13:00 - 16:00 WITA",
    location: "Aula Hotel Grand Bulukumba",
    description: "Dialog publik membahas ekonomi kerakyatan dengan menghadirkan pakar ekonomi dan tokoh masyarakat.",
  },
  {
    id: 5,
    title: "Peringatan Hari Lingkungan Hidup",
    date: "10 Juni 2023",
    time: "07:00 - 12:00 WITA",
    location: "Pantai Tanjung Bira",
    description: "Kegiatan bersih pantai dan penanaman pohon dalam rangka peringatan Hari Lingkungan Hidup.",
  },
  {
    id: 6,
    title: "Seminar Pendidikan Nasional",
    date: "17 Juni 2023",
    time: "09:00 - 15:00 WITA",
    location: "Gedung SMAN 1 Bulukumba",
    description: "Seminar pendidikan nasional dengan tema 'Meningkatkan Kualitas Pendidikan di Era Digital'.",
  },
  {
    id: 7,
    title: "Musyawarah Daerah PKS Bulukumba",
    date: "24-25 Juni 2023",
    time: "08:00 - 17:00 WITA",
    location: "Hotel Grand Bulukumba",
    description: "Musyawarah daerah untuk membahas program kerja dan strategi partai untuk tahun 2023-2024.",
  },
  {
    id: 8,
    title: "Pelatihan Kewirausahaan",
    date: "8 Juli 2023",
    time: "09:00 - 16:00 WITA",
    location: "Aula Kantor DPD PKS Bulukumba",
    description:
      "Pelatihan kewirausahaan untuk pemuda dan ibu rumah tangga dengan tema 'Membangun UMKM di Era Digital'.",
  },
]

export default function AgendaContent() {
  return (
    <div>
      {/* Filter by Month */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-[#F47C20] text-white rounded-md">Semua</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Mei 2023</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Juni 2023</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Juli 2023</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Agustus 2023</button>
        </div>
      </div>

      {/* Agenda Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agendaItems.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-md h-full">
            <CardHeader className="p-6">
              <CardTitle className="text-xl">{item.title}</CardTitle>
              <div className="flex items-center mt-2 space-x-2 text-[#F47C20]">
                <Calendar size={16} />
                <CardDescription className="text-[#F47C20]">{item.date}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Clock size={18} className="flex-shrink-0 mt-0.5 text-gray-500" />
                  <span className="text-sm text-gray-600">{item.time}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gray-500" />
                  <span className="text-sm text-gray-600">{item.location}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </CardContent>
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
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">3</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            Selanjutnya &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}
