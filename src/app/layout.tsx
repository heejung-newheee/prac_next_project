import { ThemeProvider } from '@/components/ThemeProvider';
import ModeToggle from '@/components/common/ModeToggle';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Sign-up/Sign-In',
    description: '간단한 회원가입/로그인 페이지'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <ModeToggle />
                    {children}
                    {/* <Toaster /> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
