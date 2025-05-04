"use client"

import { useState } from "react"
import { Image } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

// Extended gallery images for the full gallery page
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Bakti Sosial PKS Bulukumba",
    category: "Sosial",
    date: "12 April 2023",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rapat Koordinasi Kader PKS Bulukumba",
    category: "Rapat",
    date: "28 Maret 2023",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pelatihan Kepemimpinan PKS Bulukumba",
    category: "Pelatihan",
    date: "15 Maret 2023",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kunjungan ke Masyarakat",
    category: "Kunjungan",
    date: "2 Maret 2023",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Dialog Publik PKS Bulukumba",
    category: "Dialog",
    date: "25 Februari 2023",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Sosial PKS Bulukumba",
    category: "Sosial",
    date: "18 Februari 2023",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Musyawarah Daerah PKS Bulukumba",
    category: "Rapat",
    date: "10 Februari 2023",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Peringatan Hari Kemerdekaan",
    category: "Peringatan",
    date: "17 Agustus 2022",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sosialisasi Program PKS",
    category: "Sosialisasi",
    date: "5 Agustus 2022",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pelatihan Kader PKS Bulukumba",
    category: "Pelatihan",
    date: "28 Juli 2022",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kunjungan ke Sekolah",
    category: "Kunjungan",
    date: "20 Juli 2022",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Diskusi Publik Ekonomi Kerakyatan",
    category: "Dialog",
    date: "15 Juli 2022",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pembagian Sembako untuk Warga",
    category: "Sosial",
    date: "10 Juli 2022",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rapat Evaluasi Program",
    category: "Rapat",
    date: "5 Juli 2022",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Peringatan Hari Lingkungan",
    category: "Peringatan",
    date: "5 Juni 2022",
  },
  {
    id: 16,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sosialisasi Pemilu",
    category: "Sosialisasi",
    date: "28 Mei 2022",
  },
]

const categories = ["Semua", "Sosial", "Rapat", "Pelatihan", "Kunjungan", "Dialog", "Peringatan", "Sosialisasi"]

export default function FullGalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null)

  const filteredImages =
    selectedCategory === "Semua" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#F47C20] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
          >
            <Image
              
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <p className="font-medium">{image.alt}</p>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-300">{image.category}</span>
                  <span className="text-xs text-gray-400">{image.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-2 top-2 z-10 bg-black/50 text-white p-2 rounded-full"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

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
