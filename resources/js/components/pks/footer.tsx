"use client"

import { Link } from "@inertiajs/react"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">PKS Bulukumba</h3>
            <p className="mb-4 text-gray-400">
              Partai Keadilan Sejahtera (PKS) Bulukumba berkomitmen untuk membangun Bulukumba yang adil, makmur, dan
              sejahtera.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "#", label: "Youtube" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={social.href} className="text-gray-400 hover:text-[#F47C20]" aria-label={social.label}>
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Tautan Cepat</h3>
            <ul className="space-y-2">
              {[
                { name: "Beranda", href: "#beranda" },
                { name: "Tentang Kami", href: "#tentang" },
                { name: "Berita", href: "#berita" },
                { name: "Agenda", href: "#agenda" },
                { name: "Galeri", href: "#galeri" },
                { name: "Kontak", href: "#" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#F47C20]">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Tautan Eksternal</h3>
            <ul className="space-y-2">
              {[
                { name: "PKS Nasional", href: "https://pks.id", target: "_blank" },
                { name: "PKS Sulawesi Selatan", href: "#" },
                { name: "DPRD Bulukumba", href: "#" },
                { name: "Pemkab Bulukumba", href: "#" },
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href={link.href} target={link.target} className="text-gray-400 hover:text-[#F47C20]">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Kontak Kami</h3>
            <ul className="space-y-4">
              <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <MapPin size={20} className="flex-shrink-0 mt-1 text-[#F47C20]" />
                <span className="text-gray-400">
                  Jl. Jenderal Sudirman No. 123, Kelurahan Caile, Kecamatan Ujung Bulu, Kabupaten Bulukumba, Sulawesi
                  Selatan
                </span>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Phone size={20} className="flex-shrink-0 text-[#F47C20]" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </motion.li>
              <motion.li className="flex items-center space-x-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Mail size={20} className="flex-shrink-0 text-[#F47C20]" />
                <span className="text-gray-400">info@pksbulukumba.org</span>
              </motion.li>
            </ul>
          </div>
        </div>

        <motion.div
          className="pt-8 mt-8 text-center border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-400">&copy; {new Date().getFullYear()} DPD PKS Bulukumba. Hak Cipta Dilindungi.</p>
        </motion.div>
      </div>
    </footer>
  )
}
