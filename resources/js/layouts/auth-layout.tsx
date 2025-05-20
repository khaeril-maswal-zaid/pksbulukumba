import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import PksLayout from './pks-layout';

export default function AuthLayout({ children, title, description, ...props }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <PksLayout>
            <AuthLayoutTemplate title={title} description={description} {...props}>
                {children}
            </AuthLayoutTemplate>
        </PksLayout>
    );
}
