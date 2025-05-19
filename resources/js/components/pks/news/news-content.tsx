import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { Calendar } from 'lucide-react';

export default function NewsContent({ Latest }) {
    return (
        <div>
            {/* Category Filter */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                    <button className="rounded-md bg-[#F47C20] px-4 py-2 text-white">Semua</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Politik</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Sosial</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Ekonomi</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Pendidikan</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Kaderisasi</button>
                </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Latest.data.map((item) => (
                    <Card key={item.id} className="gap-0 overflow-hidden py-0 transition-all duration-300 hover:shadow-lg">
                        <div className="relative h-56 w-full overflow-hidden">
                            <img src={`/storage/${item.picture1}`} className="object-cover" />
                            <div className="absolute top-2 right-2 rounded bg-[#F47C20] px-2 py-1 text-xs text-white">{item.category}</div>
                        </div>
                        <CardHeader className="p-4">
                            <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                            <CardDescription className="flex items-center text-xs text-gray-500">
                                <Calendar size={12} className="mr-1" />
                                {item.created_at}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="line-clamp-3 text-sm text-gray-600">{item.excerpt}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Link href={`/blog/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
                                Baca selengkapnya
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">&laquo; Sebelumnya</button>
                    <button className="rounded-md bg-[#F47C20] px-4 py-2 text-white">1</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">2</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">3</button>
                    <button className="rounded-md bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">Selanjutnya &raquo;</button>
                </div>
            </div>
        </div>
    );
}
