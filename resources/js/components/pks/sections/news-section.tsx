'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function NewsSection({ blogs }) {
    blogs.map((blog) => {
        blog.created_at = new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(blogs.created_at);
    });

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="berita" className="bg-gray-50 py-16" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-3xl font-bold text-black">Berita Terbaru</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                    {blogs.map((item) => (
                        <motion.div key={item.id} variants={item}>
                            <Card className="h-full gap-0 overflow-hidden py-0 transition-all duration-300 hover:shadow-lg">
                                <div className="relative h-60 w-full overflow-hidden">
                                    <img
                                        src={`/storage/${item.picture1}` || '/placeholder.svg'}
                                        alt={item.title}
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <CardHeader className="p-5">
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                    <CardDescription className="flex items-center text-xs text-gray-500">
                                        <Calendar size={12} className="mr-1" />
                                        {item.created_at}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0 pb-3">
                                    <p className="line-clamp-5 text-sm text-gray-600">{item.excerpt}</p>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Link href={`/blog/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
                                        Baca selengkapnya
                                    </Link>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/blog">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Lihat Semua Berita</Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
