import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { CalendarDays, FileText, HandCoins, Image, Info, LayoutDashboard, MapPin, Phone, Users2 } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard, // Ikon khas untuk dashboard
    },
    {
        title: 'Blog',
        href: '/dashboard/blog',
        icon: FileText, // Blog = tulisan = dokumen
    },
    {
        title: 'Struktur',
        href: '/dashboard/struktur',
        icon: Users2, // Struktur organisasi = orang-orang
    },
    {
        title: 'Agenda',
        href: '/dashboard/agenda',
        icon: CalendarDays, // Agenda = kalender / jadwal
    },
    {
        title: 'Dapil',
        href: '/dashboard/dapil',
        icon: MapPin, // Dapil = daerah pemilihan = lokasi
    },
    {
        title: 'Kontak PKS',
        href: 'dashboard/kontak',
        icon: Phone, // Kontak = telepon
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Tentang PKS Bulukumba',
        href: 'dashboard/tentang',
        icon: Info, // Tentang = informasi
    },
    {
        title: 'Donasi PKS',
        href: 'dashboard/donasi',
        icon: HandCoins, // Donasi = uang / amal
    },
    {
        title: 'Carousel Web',
        href: 'dashboard/carousel',
        icon: Image, // Carousel = gambar berganti
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
