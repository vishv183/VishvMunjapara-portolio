import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vishv Munjapara — Portfolio',
  description:
    "Hey, I'm Vishv Munjapara. Here, you can check out what I'm working on. I try my best to create things with ❤️",
  keywords: [
    'Vishv',
    'Munjapara',
    'Portfolio',
    'Backend Developer',
    'Python',
    'FastAPI',
    'Django',
    'AI',
  ],
  authors: [{ name: 'Vishv Munjapara' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icon.png', sizes: '192x192', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body id="top" className="bg-[#fafafa] text-black antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
