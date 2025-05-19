'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
    {
        id: 1,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Kegiatan Bakti Sosial PKS Bulukumba',
        created_at: 'Sosial',
    },
    {
        id: 2,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Rapat Koordinasi Kader PKS Bulukumba',
        category: 'Rapat',
    },
    {
        id: 3,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Pelatihan Kepemimpinan PKS Bulukumba',
        category: 'Pelatihan',
    },
    {
        id: 4,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Kunjungan ke Masyarakat',
        category: 'Kunjungan',
    },
    {
        id: 5,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Dialog Publik PKS Bulukumba',
        category: 'Dialog',
    },
    {
        id: 6,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Kegiatan Sosial PKS Bulukumba',
        category: 'Sosial',
    },
    {
        id: 7,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Musyawarah Daerah PKS Bulukumba',
        category: 'Rapat',
    },
    {
        id: 8,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Peringatan Hari Kemerdekaan',
        category: 'Peringatan',
    },
    {
        id: 9,
        src: '/placeholder.svg?height=400&width=600',
        alt: 'Sosialisasi Program PKS',
        category: 'Sosialisasi',
    },
];

const categories = ['Semua', 'Sosial', 'Rapat', 'Pelatihan', 'Kunjungan', 'Dialog', 'Peringatan', 'Sosialisasi'];

export default function GalleryContent({ gallery }) {
    const [selectedImage, setSelectedImage] = useState<null | { src: string; alt: string }>(null);

    return (
        <div>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.map((item, index) => (
                    <div
                        key={index}
                        className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg shadow-md"
                        onClick={() => setSelectedImage({ src: item.path, alt: item.alt })}
                    >
                        <img
                            src={`/storage/${item.path}`}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-end bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="p-4 text-white">
                                <p className="font-medium">{item.alt}</p>
                                <p className="text-sm text-gray-300">{item.created_at}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-4xl border-none bg-transparent p-0">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-2 right-2 z-10 rounded-full bg-black/50 p-2 text-white"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    {selectedImage && (
                        <div className="relative h-[90vh] overflow-hidden rounded-md">
                            <img src={selectedImage.src} className="h-full w-full object-cover" />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
