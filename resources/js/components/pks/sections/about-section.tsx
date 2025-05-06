'use client';

import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection({ about }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const { logoPks } = usePage().props;

    return (
        <section id="tentang" className="bg-white py-16" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:space-x-8">
                    <motion.div
                        className="mb-8 flex justify-center md:mb-0 md:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div className="relative" whileHover={{ rotate: 360 }} transition={{ duration: 1.5, ease: 'easeInOut' }}>
                            <img src={logoPks} className="h-96 object-contain" />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="mb-6 text-3xl font-bold text-black">{about?.title}</h2>
                        <div className="mb-8 h-1 w-20 bg-[#F47C20]"></div>
                        <div className="mb-5 text-gray-600" dangerouslySetInnerHTML={{ __html: about?.body1 }} />
                        <div className="mb-8 text-gray-600" dangerouslySetInnerHTML={{ __html: about?.body2 }} />
                        {/* <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Selengkapnya</Button> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
