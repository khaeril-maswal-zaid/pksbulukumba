"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Image } from "lucide-react"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const leaders = [
  {
    id: 1,
    name: "H. Ahmad Fauzan, S.H.",
    position: "Ketua DPD PKS Bulukumba",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Hj. Siti Rahmah, M.Pd.",
    position: "Sekretaris DPD PKS Bulukumba",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "H. Muhammad Ridwan, S.E.",
    position: "Bendahara DPD PKS Bulukumba",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function LeadershipSection() {
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
    <section id="kepengurusan" className="py-16 bg-white" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-black">Struktur Kepengurusan</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {leaders.map((leader) => (
            <motion.div key={leader.id} variants={item}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="w-full h-full">
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </motion.div>
                </div>
                <CardHeader className="p-4 text-center">
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription>{leader.position}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/kepengurusan">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Lihat Struktur Lengkap</Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
