'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GallerySection({ gallery }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const checkScrollability = () => {
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;

        const scrollAmount = 300;
        const newScrollLeft = direction === 'left' ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount;

        scrollRef.current.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth',
        });

        setTimeout(checkScrollability, 300);
    };

    return (
        <section id="galeri" className="bg-gray-50 py-5 md:py-16" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-3xl font-bold text-black">Galeri Kegiatan</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="scrollbar-hide flex items-center space-x-4 overflow-x-auto pb-4" ref={scrollRef} onScroll={checkScrollability}>
                        {gallery.map((image, index) => (
                            <motion.div
                                key={image.id || index}
                                className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-lg shadow-md md:h-56 md:w-80 lg:h-64 lg:w-96"
                                initial={{ opacity: 0, x: 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-full w-full overflow-hidden">
                                    <img src={`/storage/${image?.path}`} className="object-cover transition-transform duration-500 hover:scale-110" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        className={`absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ${
                            canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft size={20} />
                    </motion.button>

                    <motion.button
                        className={`absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ${
                            canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                        onClick={() => scroll('right')}
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
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Lihat Lebih Banyak Foto</Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
