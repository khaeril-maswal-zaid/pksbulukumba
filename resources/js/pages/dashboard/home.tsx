import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { CalendarDays, FileText, Users2 } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { name, auth } = usePage().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5"></div>
                    <div className="relative p-8 md:p-12">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="mb-6 flex-1 text-center md:mb-0 md:text-left">
                                <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                    <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
                                    Dashboard Admin
                                </div>
                                <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                                    Selamat datang, <span className="text-blue-600">{auth?.user?.name.split(' ').slice(0, 2).join(' ')}</span>
                                </h2>
                                <p className="mb-4 text-lg text-gray-600">di Dashboard Website Resmi</p>
                                <h3 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                                    {name}
                                </h3>
                                <p className="mx-auto mt-4 max-w-md text-gray-500 md:mx-0">
                                    Kelola semua informasi pendaftaran dan data pesantren dengan mudah melalui panel admin yang terintegrasi.
                                </p>
                            </div>

                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-2xl md:h-40 md:w-40">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white md:h-32 md:w-32">
                                            <span className="text-3xl font-bold text-blue-600 md:text-4xl">PKS</span>
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-6 w-6 animate-pulse rounded-full border-4 border-white bg-green-500"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t border-blue-200/50 pt-6">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="text-center">
                                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">Kelola Blog</p>
                                    <p className="text-xs text-gray-500">News, Aspirasi, Edukasi Politik, Opini, Inspirasi </p>
                                </div>
                                <div className="text-center">
                                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                        <CalendarDays className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">Kelola Agenda</p>
                                    <p className="text-xs text-gray-500">Kegiatan maupun Program</p>
                                </div>
                                <div className="text-center">
                                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                                        <Users2 className="h-6 w-6" />
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">Kelola Kepengurusan</p>
                                    <p className="text-xs text-gray-500">Databases dan Informasi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
