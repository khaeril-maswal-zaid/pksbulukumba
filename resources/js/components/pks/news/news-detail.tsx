"use client"

import { Button } from "@/components/ui/button"
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ChevronLeft, MessageCircle } from "lucide-react"
import { Image } from "lucide-react"
import { Link } from "@inertiajs/react"
import RelatedNews from "./related-news"
import { useState } from "react"
import LeadershipSidebar from "./leadership-sidebar"

interface NewsItem {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  image: string
  category: string
  tags: string[]
}

interface NewsDetailProps {
  news: NewsItem
  relatedNews: NewsItem[]
}

export default function NewsDetail({ news, relatedNews }: NewsDetailProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(
        news.title,
      )}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        window.location.href,
      )}&title=${encodeURIComponent(news.title)}`,
      "_blank",
    )
  }

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${news.title} - ${window.location.href}`)}`, "_blank")
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-[#F47C20]">
              Beranda
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#berita" className="hover:text-[#F47C20]">
              Berita
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{news.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Main Content - Left Column */}
          <div className="lg:w-2/3">
            {/* Back Button */}
            <Link href="/#berita">
              <Button variant="ghost" className="mb-6 hover:text-[#F47C20]">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Kembali ke Berita
              </Button>
            </Link>

            {/* Article Header */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{news.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="mr-1 h-4 w-4" />
                <span>{news.category}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image  className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: news.content }} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="border-t border-b py-4 mb-8">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-medium flex items-center">
                  <Share2 className="mr-2 h-4 w-4" /> Bagikan:
                </span>
                <button
                  onClick={shareOnFacebook}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  onClick={shareOnWhatsApp}
                  className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button
                  onClick={copyToClipboard}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300 text-sm"
                >
                  {copied ? "Tersalin!" : "Salin Tautan"}
                </button>
              </div>
            </div>

            {/* Related News */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Berita Terkait</h2>
              <RelatedNews news={relatedNews} />
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="lg:w-1/3 mt-8 lg:mt-0 lg:sticky lg:top-20 lg:self-start h-[600px]">
            <LeadershipSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
