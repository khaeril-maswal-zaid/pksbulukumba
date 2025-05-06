import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { Calendar } from 'lucide-react';

interface NewsItem {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    created_at: string;
    picture1: string;
}

interface RelatedNewsProps {
    news: NewsItem[];
}

export default function RelatedNews({ news }: RelatedNewsProps) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {news.map((item) => (
                <Card key={item.slug} className="gap-0 overflow-hidden py-0 transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48 w-full">
                        <img src={`/storage/${item.picture1}`} className="h-full w-full object-cover" />
                    </div>
                    <CardHeader className="p-4">
                        <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                        <CardDescription className="flex items-center text-xs text-gray-500">
                            <Calendar size={12} className="mr-1" />
                            {item.created_at}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="line-clamp-2 text-sm text-gray-600">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                        <Link href={`/blog/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
                            Baca selengkapnya
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
