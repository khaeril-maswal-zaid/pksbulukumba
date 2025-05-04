"use client"

import { useState } from "react"
import { Image } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Bakti Sosial PKS Bulukumba",
    category: "Sosial",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Rapat Koordinasi Kader PKS Bulukumba",
    category: "Rapat",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Pelatihan Kepemimpinan PKS Bulukumba",
    category: "Pelatihan",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kunjungan ke Masyarakat",
    category: "Kunjungan",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Dialog Publik PKS Bulukumba",
    category: "Dialog",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Kegiatan Sosial PKS Bulukumba",
    category: "Sosial",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Musyawarah Daerah PKS Bulukumba",
    category: "Rapat",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Peringatan Hari Kemerdekaan",
    category: "Peringatan",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sosialisasi Program PKS",
    category: "Sosialisasi",
  },
]

const categories = ["Semua", "Sosial", "Rapat", "Pelatihan", "Kunjungan", "Dialog", "Peringatan", "Sosialisasi"]

export default function GalleryContent() {
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
                <p className="text-sm text-gray-300">{image.category}</p>
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

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-[#F47C20] text-white rounded-md hover:bg-[#e06b15]">Muat Lebih Banyak</button>
      </div>
    </div>
  )
}
