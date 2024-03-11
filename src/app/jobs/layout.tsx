import { Footer } from '@/components/frames/Footer';
import { Header } from '@/components/frames/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='h-full bg-bodyBg'>
      <Header />
      <section >
        {children}
      </section>
      <Footer />
    </main>
  );
}
