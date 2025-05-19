import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    {
        id: 4,
        title: 'Dialog Publik: Ekonomi Kerakyatan',
        date: '5 Juni 2023',
        time: '13:00 - 16:00 WITA',
        location: 'Aula Hotel Grand Bulukumba',
        description: 'Dialog publik membahas ekonomi kerakyatan dengan menghadirkan pakar ekonomi dan tokoh masyarakat.',
    },
    {
        id: 5,
        title: 'Peringatan Hari Lingkungan Hidup',
        date: '10 Juni 2023',
        time: '07:00 - 12:00 WITA',
        location: 'Pantai Tanjung Bira',
        description: 'Kegiatan bersih pantai dan penanaman pohon dalam rangka peringatan Hari Lingkungan Hidup.',
    },
    {
        id: 6,
        title: 'Seminar Pendidikan Nasional',
        date: '17 Juni 2023',
        time: '09:00 - 15:00 WITA',
        location: 'Gedung SMAN 1 Bulukumba',
        description: "Seminar pendidikan nasional dengan tema 'Meningkatkan Kualitas Pendidikan di Era Digital'.",
    },
    {
        id: 7,
        title: 'Musyawarah Daerah PKS Bulukumba',
        date: '24-25 Juni 2023',
        time: '08:00 - 17:00 WITA',
        location: 'Hotel Grand Bulukumba',
        description: 'Musyawarah daerah untuk membahas program kerja dan strategi partai untuk tahun 2023-2024.',
    },
    {
        id: 8,
        title: 'Pelatihan Kewirausahaan',
        date: '8 Juli 2023',
        time: '09:00 - 16:00 WITA',
        location: 'Aula Kantor DPD PKS Bulukumba',
        description: "Pelatihan kewirausahaan untuk pemuda dan ibu rumah tangga dengan tema 'Membangun UMKM di Era Digital'.",
    },
];

export default function AgendaContent({ allAgendaData }) {
    const { name } = usePage().props;
    const [scrollY, setScrollY] = useState(0);
    const [activeYear, setActiveYear] = useState(new Date().getFullYear().toString());
    const [currentSlide, setCurrentSlide] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    // Get available years
    const availableYears = Object.keys(allAgendaData);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Get current year's agenda
    const currentYearAgenda = allAgendaData[activeYear] || [];

    return (
        <>
            {/* Main Content with Sidebar */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Main Content - Agenda */}
                <div className="lg:col-span-3">
                    {/* Year Navigation */}
                    <div className="mb-8 overflow-x-auto">
                        <div className="flex min-w-max space-x-2">
                            {availableYears.map((year) => (
                                <Button
                                    key={year}
                                    variant={activeYear === year ? 'default' : 'outline'}
                                    className={activeYear === year ? 'bg-primary' : ''}
                                    onClick={() => setActiveYear(year)}
                                >
                                    {year}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Agenda List */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {currentYearAgenda.length > 0 ? (
                            currentYearAgenda.map((agenda, index) => (
                                <motion.div key={agenda.id || index} variants={agenda}>
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
                            ))
                        ) : (
                            <div className="col-span-full rounded-lg bg-gray-50 py-12 text-center">
                                <h3 className="mb-2 text-xl font-bold">Tidak ada agenda untuk tahun ini</h3>
                                <p className="text-gray-600">Silakan pilih tahun lain atau kembali lagi nanti</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">&laquo; Sebelumnya</button>
                    <button className="rounded-md bg-[#F47C20] px-4 py-2 text-white">1</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">2</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">3</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Selanjutnya &raquo;</button>
                </div>
            </div>
        </>
    );
}
