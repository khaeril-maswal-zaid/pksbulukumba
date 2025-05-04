"use client"

import { useState, useEffect } from "react"
import { Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Image } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="relative w-8 h-8"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/placeholder.svg?height=32&width=32" alt="Logo PKS" width={32} height={32} />
          </motion.div>
          <span className="text-xl font-bold text-[#F47C20]">PKS Bulukumba</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {["Beranda", "Tentang", "Berita", "Agenda", "Peta Dapil", "Kepengurusan", "Galeri"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase()}`}
              className="group text-sm font-medium text-gray-700 hover:text-[#F47C20] relative"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F47C20] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="absolute w-full bg-white border-b shadow-md md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container px-4 py-4 mx-auto space-y-4">
            {["Beranda", "Tentang", "Berita", "Agenda", "Peta Dapil", "Kepengurusan", "Galeri"].map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-gray-700 hover:text-[#F47C20]"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <Button className="w-full bg-[#F47C20] hover:bg-[#e06b15] text-white">Gabung PKS</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
