'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Calendar, ChevronLeft, Eye, Facebook, Linkedin, MessageCircle, Share2, Tag, Twitter, User } from 'lucide-react';
import { useState } from 'react';
import LeadershipSidebar from './leadership-sidebar';
import RelatedNews from './related-news';

interface NewsItem {
    id: number;
    title: string;
    slug: string;
    body1: string;
    body2: string;
    body3: string;
    excerpt: string;
    created_at: string;
    author: object;
    visit: string;
    picture1: string;
    picture2: string;
    picture3: string;
    category: string;
    tags: string[];
}

interface NewsDetailProps {
    news: NewsItem;
    relatedNews: NewsItem[];
}

export default function NewsDetail({ news, relatedNews }: NewsDetailProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    const shareOnTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(news.title)}`,
            '_blank',
        );
    };

    const shareOnLinkedIn = () => {
        window.open(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(news.title)}`,
            '_blank',
        );
    };

    const shareOnWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${news.title} - ${window.location.href}`)}`, '_blank');
    };

    return (
        <div className="bg-green mt-7 min-h-screen">
            {/* Breadcrumb */}
            <div className="border-b bg-gray-50 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <Link href="/" className="hover:text-[#F47C20]">
                            Beranda
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/#berita" className="hover:text-[#F47C20]">
                            Blog
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="font-medium text-gray-900">{news.title}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="relative flex flex-col gap-8 lg:flex-row">
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
                        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{news.title}</h1>

                        {/* Meta Information */}
                        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>
                                    {news.created_at
                                        ? new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(
                                              new Date(news.created_at),
                                          )
                                        : '–'}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <User className="mr-1 h-4 w-4" />
                                <span>{news.author.name || 'Official PKS Bulukumba'}</span>
                            </div>
                            <div className="flex items-center">
                                <Tag className="mr-1 h-4 w-4" />
                                <span>{news.category || 'News'}</span>
                            </div>
                            <div className="flex items-center">
                                <Eye className="mr-1 h-4 w-4" />
                                <span>{news.visit || '165'}</span>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="relative mb-8 h-full w-full overflow-hidden rounded-lg md:h-auto">
                            <img src={`/storage/${news.picture1}`} className="h-full w-full object-cover" />
                        </div>

                        {/* Article Content */}
                        <div className="prose mb-8 max-w-none" dangerouslySetInnerHTML={{ __html: news.body1 + news.body2 }} />

                        {/* Tags */}
                        <div className="mb-8 flex flex-wrap gap-2">
                            {news.tags.map((tag) => (
                                <span key={tag} className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800 hover:bg-gray-200">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Share Buttons */}
                        <div className="mb-8 border-t border-b py-4">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center font-medium">
                                    <Share2 className="mr-2 h-4 w-4" /> Bagikan:
                                </span>
                                <button
                                    onClick={shareOnFacebook}
                                    className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={shareOnTwitter}
                                    className="rounded-full bg-sky-500 p-2 text-white hover:bg-sky-600"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={shareOnLinkedIn}
                                    className="rounded-full bg-blue-700 p-2 text-white hover:bg-blue-800"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={shareOnWhatsApp}
                                    className="rounded-full bg-green-500 p-2 text-white hover:bg-green-600"
                                    aria-label="Share on WhatsApp"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={copyToClipboard}
                                    className="rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-700 hover:bg-gray-300"
                                >
                                    {copied ? 'Tersalin!' : 'Salin Tautan'}
                                </button>
                            </div>
                        </div>

                        {/* Related News */}
                        <div className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold">Berita Terkait</h2>
                            <RelatedNews news={relatedNews} />
                        </div>
                    </div>

                    {/* Sidebar - Right Column */}
                    <div className="mt-8 h-[600px] lg:sticky lg:top-20 lg:mt-0 lg:w-1/3 lg:self-start">
                        <LeadershipSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
