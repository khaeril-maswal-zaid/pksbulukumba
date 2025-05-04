import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Image } from "lucide-react"
import { Link } from "@inertiajs/react"
import { Calendar } from "lucide-react"

const newsItems = [
  {
    id: 1,
    slug: "pks-bulukumba-gelar-bakti-sosial",
    title: "PKS Bulukumba Gelar Bakti Sosial di Desa Terpencil",
    excerpt:
      "PKS Bulukumba mengadakan kegiatan bakti sosial berupa pembagian sembako dan pemeriksaan kesehatan gratis di desa terpencil.",
    date: "12 April 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Sosial",
  },
  {
    id: 2,
    slug: "kader-pks-bulukumba-raih-penghargaan",
    title: "Kader PKS Bulukumba Raih Penghargaan Tokoh Inspiratif",
    excerpt: "Salah satu kader PKS Bulukumba berhasil meraih penghargaan sebagai tokoh inspiratif tingkat provinsi.",
    date: "28 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Prestasi",
  },
  {
    id: 3,
    slug: "pks-bulukumba-dukung-program-umkm",
    title: "PKS Bulukumba Dukung Program Pemberdayaan UMKM",
    excerpt: "PKS Bulukumba menginisiasi program pemberdayaan UMKM untuk meningkatkan perekonomian masyarakat lokal.",
    date: "15 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Ekonomi",
  },
  {
    id: 4,
    slug: "fraksi-pks-bulukumba-tolak-kenaikan-bbm",
    title: "Fraksi PKS Bulukumba Tolak Kenaikan Harga BBM",
    excerpt:
      "Fraksi PKS di DPRD Bulukumba menyatakan sikap menolak rencana kenaikan harga BBM yang memberatkan masyarakat.",
    date: "2 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Politik",
  },
  {
    id: 5,
    slug: "pks-bulukumba-gelar-pelatihan-kader",
    title: "PKS Bulukumba Gelar Pelatihan Kader di Pantai Bira",
    excerpt: "PKS Bulukumba mengadakan pelatihan kader dengan tema 'Membangun Kader Berkualitas' di Pantai Bira.",
    date: "25 Februari 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Kaderisasi",
  },
  {
    id: 6,
    slug: "pks-bulukumba-kunjungi-petani-kopi",
    title: "PKS Bulukumba Kunjungi Petani Kopi di Kecamatan Kajang",
    excerpt:
      "Kader PKS Bulukumba melakukan kunjungan ke petani kopi di Kecamatan Kajang untuk mendengarkan aspirasi mereka.",
    date: "18 Februari 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Kunjungan",
  },
  {
    id: 7,
    slug: "pks-bulukumba-gelar-dialog-publik",
    title: "PKS Bulukumba Gelar Dialog Publik tentang Pendidikan",
    excerpt: "PKS Bulukumba mengadakan dialog publik dengan tema 'Meningkatkan Kualitas Pendidikan di Bulukumba'.",
    date: "10 Februari 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Pendidikan",
  },
  {
    id: 8,
    slug: "pks-bulukumba-bantu-korban-banjir",
    title: "PKS Bulukumba Bantu Korban Banjir di Kecamatan Gantarang",
    excerpt:
      "PKS Bulukumba memberikan bantuan kepada korban banjir di Kecamatan Gantarang berupa sembako dan pakaian layak pakai.",
    date: "5 Februari 2023",
    image: "/placeholder.svg?height=200&width=300",
    category: "Sosial",
  },
]

export default function NewsContent() {
  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-[#F47C20] text-white rounded-md">Semua</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Politik</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Sosial</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Ekonomi</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Pendidikan</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">Kaderisasi</button>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative w-full h-48">
              <Image className="object-cover" />
              <div className="absolute top-2 right-2 bg-[#F47C20] text-white text-xs px-2 py-1 rounded">
                {item.category}
              </div>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              <CardDescription className="text-xs text-gray-500 flex items-center">
                <Calendar size={12} className="mr-1" />
                {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-600 line-clamp-3">{item.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/berita/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
                Baca selengkapnya
              </Link>
            </CardFooter>
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
