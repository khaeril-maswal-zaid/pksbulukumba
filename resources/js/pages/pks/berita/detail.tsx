import NewsDetail from '@/components/pks/news/news-detail';
import PksLayout from '@/layouts/pks-layout';
import { Head } from '@inertiajs/react';

// Sample news data - in a real application, this would come from a database or API

export default function NewsDetailPage({ blogDetail, relatedNews }) {
    return (
        <>
            <Head title={blogDetail.title} />
            <PksLayout>
                <NewsDetail news={blogDetail} relatedNews={relatedNews} />
            </PksLayout>
        </>
    );
}
