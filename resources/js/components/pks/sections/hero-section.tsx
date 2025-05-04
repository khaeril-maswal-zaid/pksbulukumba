'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="beranda" className="relative w-full bg-gray-100">
            <div className="relative h-[500px] w-full overflow-hidden md:h-[600px]">
                {slides.map((slide: any, index: any) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                    >
                        <img src={slide.image} className="w-full object-cover" />
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
                                    className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    key={`buttons-${currentSlide}`}
                                >
                                    <Button size="lg" className="bg-[#F47C20] text-white hover:bg-[#e06b15]">
                                        Gabung PKS
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-white bg-white text-gray-800 hover:bg-gray-100">
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
                    className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                    {slides.map((_, index: any) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'scale-125 bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
