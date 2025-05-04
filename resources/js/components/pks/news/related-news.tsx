import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { Image } from "lucide-react"
import { Link } from "lucide-react"

interface NewsItem {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}

interface RelatedNewsProps {
  news: NewsItem[]
}

export default function RelatedNews({ news }: RelatedNewsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map((item) => (
        <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative w-full h-48">
            <Image className="object-cover" />
          </div>
          <CardHeader className="p-4">
            <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
            <CardDescription className="text-xs text-gray-500 flex items-center">
              <Calendar size={12} className="mr-1" />
              {item.date}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/berita/${item.slug}`} className="text-sm font-medium text-[#F47C20] hover:underline">
              Baca selengkapnya
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
