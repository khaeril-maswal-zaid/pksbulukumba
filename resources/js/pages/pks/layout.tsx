import type React from "react"
import ScrollProgress from "@/components/pks/scroll-progress"
import "./globals.cssX"

const inter = "font";

export const metadata = {
  title: "PKS Bulukumba",
  description: "Website resmi Partai Keadilan Sejahtera (PKS) Kabupaten Bulukumba",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
