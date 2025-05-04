"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Image } from "lucide-react"
import { Link } from "@inertiajs/react"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const newsItems = [
  {
    id: 1,
    slug: "pks-bulukumba-gelar-bakti-sosial",
    title: "PKS Bulukumba Gelar Bakti Sosial di Desa Terpencil",
    excerpt:
      "PKS Bulukumba mengadakan kegiatan bakti sosial berupa pembagian sembako dan pemeriksaan kesehatan gratis di desa terpencil.",
    date: "12 April 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    slug: "kader-pks-bulukumba-raih-penghargaan",
    title: "Kader PKS Bulukumba Raih Penghargaan Tokoh Inspiratif",
    excerpt: "Salah satu kader PKS Bulukumba berhasil meraih penghargaan sebagai tokoh inspiratif tingkat provinsi.",
    date: "28 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    slug: "pks-bulukumba-dukung-program-umkm",
    title: "PKS Bulukumba Dukung Program Pemberdayaan UMKM",
    excerpt: "PKS Bulukumba menginisiasi program pemberdayaan UMKM untuk meningkatkan perekonomian masyarakat lokal.",
    date: "15 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    slug: "fraksi-pks-bulukumba-tolak-kenaikan-bbm",
    title: "Fraksi PKS Bulukumba Tolak Kenaikan Harga BBM",
    excerpt:
      "Fraksi PKS di DPRD Bulukumba menyatakan sikap menolak rencana kenaikan harga BBM yang memberatkan masyarakat.",
    date: "2 Maret 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function NewsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="berita" className="py-16 bg-gray-50" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-black">Berita Terbaru</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {newsItems.map((item) => (
            <motion.div key={item.id} variants={item}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-xs text-gray-500 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={`/berita/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
                    Baca selengkapnya
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/berita">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Lihat Semua Berita</Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
