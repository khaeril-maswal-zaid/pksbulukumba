import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Heart, Download } from "lucide-react"

export default function IntegrationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold text-black">Integrasi PKS Nasional</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-[#F47C20]"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[#F47C20]">
                <UserPlus size={32} />
              </div>
              <CardTitle className="text-xl">Daftar PKS</CardTitle>
              <CardDescription>Bergabung menjadi anggota PKS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Bergabunglah menjadi bagian dari keluarga besar PKS dan berkontribusi untuk kemajuan bangsa dan negara.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Daftar Sekarang</Button>
            </CardFooter>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[#F47C20]">
                <Heart size={32} />
              </div>
              <CardTitle className="text-xl">Donasi PKS</CardTitle>
              <CardDescription>Dukung program dan kegiatan PKS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Berikan dukungan finansial untuk program-program PKS yang bermanfaat bagi masyarakat luas.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Donasi Sekarang</Button>
            </CardFooter>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white rounded-full bg-[#F47C20]">
                <Download size={32} />
              </div>
              <CardTitle className="text-xl">Unduh PKS</CardTitle>
              <CardDescription>Unduh logo, mars, dan dokumen PKS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                Dapatkan berbagai materi digital PKS seperti logo, mars partai, dan dokumen-dokumen penting lainnya.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="bg-[#F47C20] hover:bg-[#e06b15] text-white">Unduh Sekarang</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
