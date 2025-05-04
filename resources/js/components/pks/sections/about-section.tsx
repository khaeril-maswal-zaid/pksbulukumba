"use client"

import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="tentang" className="py-16 bg-white" ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <motion.div
            className="mb-8 md:mb-0 md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative w-48 h-48"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                width={192}
                height={192}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-black">Tentang PKS Bulukumba</h2>
            <div className="w-20 h-1 mb-8 bg-[#F47C20]"></div>
            <p className="mb-6 text-gray-600">
              Partai Keadilan Sejahtera (PKS) Bulukumba adalah partai politik yang berkomitmen untuk membangun
              masyarakat Bulukumba yang adil, makmur, dan sejahtera berdasarkan nilai-nilai keislaman dan keindonesiaan.
            </p>
            <p className="mb-8 text-gray-600">
              Visi kami adalah menjadi partai pelopor dalam mewujudkan cita-cita nasional bangsa Indonesia sebagaimana
              dimaksud dalam Pembukaan UUD 1945, khususnya di wilayah Bulukumba. Misi kami adalah menjadikan Bulukumba
              sebagai daerah yang maju, mandiri, dan berdaya saing tinggi dengan mengedepankan nilai-nilai keadilan,
              kejujuran, dan kesejahteraan bagi seluruh masyarakat.
            </p>
            <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Selengkapnya</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
