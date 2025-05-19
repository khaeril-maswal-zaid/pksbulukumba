'use client';

import { Card } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LeadershipSidebar() {
    const { leaders } = usePage().props;

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === leaders.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? leaders.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-7 h-full rounded-lg bg-white shadow-md">
            <div className="rounded-t-lg bg-[#F47C20] px-6 py-4 text-white">
                <h2 className="text-center text-xl font-bold">Struktur Kepengurusan</h2>
            </div>

            <div className="relative mb-7 h-[calc(100%-64px)] pb-7">
                {leaders.map((leader, index) => (
                    <Card
                        key={leader.id}
                        className={`absolute inset-0 h-full gap-0 border-none pt-0 shadow-none transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                    >
                        <div className="flex h-full flex-col">
                            <div className="relative mx-auto h-full w-full overflow-hidden">
                                <img src={`/storage/${leader.image}`} className="h-full w-full object-cover object-top" />
                            </div>
                            <div className="flex flex-grow flex-col py-6 pt-6">
                                <h3 className="mb-2 text-center text-xl font-bold">{leader.name}</h3>
                                <p className="text-center text-[#F47C20]">{leader.position}</p>
                                {/* <p className="flex-grow text-center text-gray-600">{leader.description}</p> */}
                            </div>
                        </div>
                    </Card>
                ))}

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                    {leaders.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-[#F47C20]' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
