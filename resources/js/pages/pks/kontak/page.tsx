'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PksLayout from '@/layouts/pks-layout';
import { Head, usePage } from '@inertiajs/react';
import * as Icons from 'lucide-react';
import { ExternalLink, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Contact channel card component
function ContactChannelCard({ channel }: { channel: (typeof contactChannels)[0] }) {
    function getIconComponent(name, color) {
        const LucideIcon = Icons[name];
        return LucideIcon ? <LucideIcon className="h-6 w-6" style={{ color: color }} /> : null;
    }

    return (
        <Card className="gap-0 overflow-hidden py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="p-0">
                <a href={channel.link} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 hover:bg-gray-50">
                    <div
                        className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: channel.bgColor }}
                    >
                        {getIconComponent(channel.icon, channel.color)}
                    </div>
                    <div className="min-w-0 flex-grow">
                        <h3 className="font-bold text-gray-900">{channel.name}</h3>
                        <p className="truncate text-sm text-gray-600">{channel.value}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 shrink-0 text-gray-400" />
                </a>
            </CardContent>
        </Card>
    );
}

export default function KontakPage({ strukturSlides, contactChannels }) {
    const { name } = usePage().props;
    const [scrollY, setScrollY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Auto-rotate struktur slides
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === strukturSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head title={`Blog`} />
            <PksLayout>
                <main className="pb-16">
                    {/* Hero Section */}

                    <div className="container mx-auto mt-8 px-8">
                        {/* Main Content with Sidebar */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <div className="mb-8">
                                    <h3 className="mb-6 text-xl font-bold">Media Sosial & Kontak</h3>
                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                        {contactChannels.map((channel, index) => (
                                            <ContactChannelCard key={index} channel={channel} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar - Struktur Slider */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 rounded-lg bg-white shadow-md">
                                    <div className="rounded-lg bg-white p-6 shadow-md">
                                        <h3 className="mb-4 text-xl font-bold">Informasi Kontak</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="mt-1 mb-4">
                                                    <MapPin className="me-3" />
                                                </div>
                                                <p>Jl. Manggis No. 8, Kel. Loka, Kec. Ujung Bulu, Kab. Bulukumba, Sulawesi Selatan 92511.</p>
                                            </div>
                                        </div>

                                        {/* Map Preview */}
                                        <h3 className="my-4 text-lg font-bold">Lokasi Kami</h3>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d331.1781502974054!2d120.193398920709!3d-5.5542376270963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbbff89a863dd89%3A0x2fe19d91f90879c2!2sDPD%20PKS%20Bulukumba!5e1!3m2!1sid!2sid!4v1748171917262!5m2!1sid!2sid"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Lokasi Pondok Pesantren ${name}`}
                                        ></iframe>
                                        <Button
                                            className="mt-4 w-full"
                                            onClick={() => window.open('hhttps://maps.app.goo.gl/vWHSGqXeEWmBEtsk7', '_blank')}
                                        >
                                            Lihat di Google Maps
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </PksLayout>
        </>
    );
}
