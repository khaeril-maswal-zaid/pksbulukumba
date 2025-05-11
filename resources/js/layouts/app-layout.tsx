import { Toaster } from '@/components/ui/toast';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ button, children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate button={button} breadcrumbs={breadcrumbs} {...props}>
        {children}
        <Toaster />
    </AppLayoutTemplate>
);
