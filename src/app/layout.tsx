import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import messages from '../../messages/pt.json';
import { NextIntlClientProvider } from 'next-intl';
import { metadataContent } from '@/assets/metadata/main';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = metadataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? '';

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="pt-BR">
        <GoogleTagManager gtmId={gtmId} />
        <body className={inter.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
