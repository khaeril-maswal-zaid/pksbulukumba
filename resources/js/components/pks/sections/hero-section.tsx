"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Bersama PKS Bulukumba Membangun Daerah",
    description:
      "Selamat datang di website resmi Partai Keadilan Sejahtera Bulukumba. Bersama kita wujudkan Bulukumba yang lebih baik, adil, dan sejahtera.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Berkhidmat Untuk Rakyat",
    description:
      "PKS Bulukumba berkomitmen untuk selalu menghadirkan kebijakan yang pro-rakyat dan membela kepentingan masyarakat Bulukumba.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Membangun Bulukumba Bermartabat",
    description:
      "Mari bersama-sama membangun Bulukumba yang bermartabat, sejahtera, dan berkeadilan untuk semua lapisan masyarakat.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="beranda" className="relative w-full bg-gray-100">
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <div className="max-w-3xl">
                <motion.h1
                  className="mb-4 text-3xl font-bold md:text-5xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  key={`title-${currentSlide}`}
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  className="mb-8 text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  key={`desc-${currentSlide}`}
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  key={`buttons-${currentSlide}`}
                >
                  <Button size="lg" className="bg-[#F47C20] hover:bg-[#e06b15] text-white">
                    Gabung PKS
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white text-gray-800 hover:bg-gray-100 border-white">
                    Lihat Agenda
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
