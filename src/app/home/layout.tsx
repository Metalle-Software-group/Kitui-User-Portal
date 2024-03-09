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
      <section className='w-full h-[100dvh] px-[100px] pb-[100px]'>{children}</section>
      {/* <Footer /> */}
    </main>
  );
}
