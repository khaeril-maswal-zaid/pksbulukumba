'use client';

import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { logoPks } = usePage().props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigasi = ['Beranda', 'Tentang', 'Berita', 'Agenda', 'Peta Dapil', 'Kepengurusan', 'Galeri'];

    return (
        <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'bg-white py-2 shadow-md' : 'bg-white py-4'}`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <img alt="Logo PKS" className="w-14" src={`/strorage/${logoPks}`} />
                    <span className="text-xl font-bold text-[#F47C20]">PKS Bulukumba</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:items-center md:space-x-6">
                    {navigasi.map((item, index) => (
                        <Link
                            key={index}
                            href={`#${item.toLowerCase()}`}
                            className="group relative text-sm font-medium text-gray-700 hover:text-[#F47C20]"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#F47C20] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="flex items-center justify-center p-2 md:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    className="absolute mt-3 w-full border-b bg-gray-100 shadow-md md:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto space-y-4 px-4 py-4">
                        {navigasi.map((item, index) => (
                            <Link
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="ms-3 mb-3 block text-sm font-medium text-gray-700 hover:text-[#F47C20]"
                                onClick={toggleMenu}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
}
