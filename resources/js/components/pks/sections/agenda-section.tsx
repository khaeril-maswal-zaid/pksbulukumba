"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
]

export default function AgendaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="agenda" className="py-16 bg-white" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-black">Agenda Kegiatan</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {agendaItems.map((item, index) => (
            <motion.div key={item.id} variants={item}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <div className="flex items-center mt-2 space-x-2 text-[#F47C20]">
                    <Calendar size={16} />
                    <CardDescription className="text-[#F47C20]">{item.date}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-start space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Clock size={18} className="flex-shrink-0 mt-0.5 text-gray-500" />
                      <span className="text-sm text-gray-600">{item.time}</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gray-500" />
                      <span className="text-sm text-gray-600">{item.location}</span>
                    </motion.div>
                  </div>
                  <p className="mt-4 text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/agenda">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Lihat Semua Agenda</Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
