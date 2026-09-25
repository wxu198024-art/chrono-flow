import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'CHRONO–FLOW | Oriental Spatiotemporal Diagnostics',
  description: 'Unveil your Jungian archetype through ancient Oriental temporal mechanics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black text-neutral-100">
        <Header />
        <main className="flex-grow pt-20 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
