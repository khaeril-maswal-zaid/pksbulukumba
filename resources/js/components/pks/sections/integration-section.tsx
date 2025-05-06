import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { Download, Heart, UserPlus } from 'lucide-react';

export default function IntegrationSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-3xl font-bold text-black">Integrasi PKS Nasional</h2>
                    <div className="mx-auto mb-8 h-1 w-20 bg-[#F47C20]"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <Card className="transition-all duration-300 hover:shadow-md">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47C20] text-white">
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
                            <Link href="https://daftar.pks.id/" target="_blank">
                                <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Daftar Sekarang</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    <Card className="transition-all duration-300 hover:shadow-md">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47C20] text-white">
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
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Donasi Sekarang</Button>
                        </CardFooter>
                    </Card>

                    <Card className="transition-all duration-300 hover:shadow-md">
                        <CardHeader className="text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F47C20] text-white">
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
                            <Button className="bg-[#F47C20] text-white hover:bg-[#e06b15]">Unduh Sekarang</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
