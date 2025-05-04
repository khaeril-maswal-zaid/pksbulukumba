"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Bakti Sosial PKS Bulukumba",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rapat Koordinasi Kader PKS Bulukumba",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pelatihan Kepemimpinan PKS Bulukumba",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kunjungan ke Masyarakat",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Dialog Publik PKS Bulukumba",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Sosial PKS Bulukumba",
  },
]

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const checkScrollability = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return

    const scrollAmount = 300
    const newScrollLeft =
      direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })

    setTimeout(checkScrollability, 300)
  }

  return (
    <section id="galeri" className="py-16 bg-gray-50" ref={ref}>
      <div className="container px-4 mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-6 text-3xl font-bold text-black">Galeri Kegiatan</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="flex items-center space-x-4 overflow-x-auto scrollbar-hide pb-4"
            ref={scrollRef}
            onScroll={checkScrollability}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative flex-shrink-0 w-72 h-48 overflow-hidden rounded-lg shadow-md md:w-80 md:h-56 lg:w-96 lg:h-64"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-full overflow-hidden">
                  <Image
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className={`absolute left-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            className={`absolute right-0 z-10 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/galeri/semua">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Lihat Lebih Banyak Foto</Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
