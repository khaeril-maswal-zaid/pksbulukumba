'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const agendaItems = [
    {
        id: 1,
        title: 'Rapat Koordinasi Kader PKS Bulukumba',
        date: '15 Mei 2023',
        time: '09:00 - 12:00 WITA',
        location: 'Kantor DPD PKS Bulukumba',
        description: 'Rapat koordinasi seluruh kader PKS Bulukumba untuk membahas program kerja semester II tahun 2023.',
    },
    {
        id: 2,
        title: 'Pelatihan Kepemimpinan Dasar',
        date: '20-21 Mei 2023',
        time: '08:00 - 16:00 WITA',
        location: 'Aula Kantor Bupati Bulukumba',
        description: 'Pelatihan kepemimpinan dasar untuk kader muda PKS Bulukumba dengan pemateri dari DPP PKS.',
    },
    {
        id: 3,
        title: 'Bakti Sosial dan Pengobatan Gratis',
        date: '27 Mei 2023',
        time: '08:00 - 14:00 WITA',
        location: 'Desa Bontotiro, Kec. Bontotiro',
        description: 'Kegiatan bakti sosial berupa pengobatan gratis dan pembagian sembako untuk masyarakat kurang mampu.',
    },
];

export default function AgendaSection({ agendas }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="agenda" className="bg-white py-16" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-3xl font-bold text-black">Agenda Kegiatan</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 gap-6 md:grid-cols-3"
                >
                    {agendas.map((agenda, index) => (
                        <motion.div key={item.id || index} variants={item}>
                            <Card
                                key={index}
                                className="slide-up group relative h-[280px] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={`/storage/${agenda.image}` || '/placeholder.svg'}
                                        alt={agenda.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
                                </div>

                                {/* Content */}
                                <CardContent className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                                    <h3 className="mb-3 text-xl font-bold">{agenda.title}</h3>
                                    <div className="mb-4 space-y-2">
                                        <div className="flex items-start">
                                            <Calendar className="text-primary-foreground mt-0.5 mr-2 h-4 w-4 opacity-80" />
                                            <span className="text-sm text-gray-200">{agenda.date}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <Clock className="text-primary-foreground mt-0.5 mr-2 h-4 w-4 opacity-80" />
                                            <span className="text-sm text-gray-200">{agenda.time}</span>
                                        </div>
                                        <div className="flex items-start">
                                            <MapPin className="text-primary-foreground mt-0.5 mr-2 h-4 w-4 opacity-80" />
                                            <span className="text-sm text-gray-200">{agenda.location}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/agenda">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Lihat Semua Agenda</Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
