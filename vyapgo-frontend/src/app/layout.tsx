import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientLayout from './ClientLayout';
import { devanagari, notoSans } from '@/lib/yantra-fonts';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'VyapGo',
  description: 'AI-powered Business Copilot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        (devanagari as any)?.variable ?? '',
        (notoSans as any)?.variable ?? '',
      ].join(' ')}
    >
      {/* Beige site background, no white band */}
      <body className="min-h-screen bg-[#F3EBDD] text-gray-900 antialiased font-sans">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}