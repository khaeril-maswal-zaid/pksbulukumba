import type React from 'react';
// import './globals.cssX';

import Footer from '@/components/pks/footer';
import Navbar from '@/components/pks/navbar';
import ScrollProgress from '@/components/pks/scroll-progress';
import HeroSection from '@/components/pks/sections/hero-section';

export default function PksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <HeroSection />
            {children}
            <Footer />
        </>
    );
}
