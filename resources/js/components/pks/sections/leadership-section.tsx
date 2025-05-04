'use client';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LeadershipSection({ leaders }) {
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
        <section id="kepengurusan" className="bg-white py-16" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-6 text-3xl font-bold text-black">Struktur Kepengurusan</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-4"
                >
                    {leaders.map((leader) => (
                        <motion.div key={leader.id} variants={item}>
                            <Card className="gap-0 overflow-hidden py-0 transition-all duration-300 hover:shadow-md">
                                <div className="h-hull relative w-full overflow-hidden">
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="w-full">
                                        <img src={leader.image || '/placeholder.svg'} alt={leader.name} className="object-cover" />
                                    </motion.div>
                                </div>
                                <CardHeader className="p-4 text-center">
                                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                                    <CardDescription>{leader.position}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/kepengurusan">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Lihat Struktur Lengkap</Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
