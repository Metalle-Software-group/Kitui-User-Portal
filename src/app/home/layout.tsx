import { Footer } from '@/components/frames/Footer';
import { Header } from '@/components/frames/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='bg-bodyBg'>
      <Header />
      <div className='w-full h-full px-[100px] pb-[100px]'>{children}</div>
      <Footer />
    </main>
  );
}
