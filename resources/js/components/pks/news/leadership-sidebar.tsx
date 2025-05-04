"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Image } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
]

export default function LeadershipSidebar() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === leadershipData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? leadershipData.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md h-full">
      <div className="bg-[#F47C20] text-white py-4 px-6 rounded-t-lg">
        <h2 className="text-xl font-bold text-center">Struktur Kepengurusan</h2>
      </div>

      <div className="relative h-[calc(100%-64px)]">
        {leadershipData.map((leader, index) => (
          <Card
            key={leader.id}
            className={`absolute inset-0 transition-opacity duration-1000 border-none shadow-none h-full ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="relative w-full h-80 mx-auto">
                <Image 
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-center mb-2">{leader.name}</h3>
                <p className="text-[#F47C20] text-center mb-4">{leader.position}</p>
                <p className="text-gray-600 text-center flex-grow">{leader.description}</p>
              </div>
            </div>
          </Card>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {leadershipData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-[#F47C20]" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
