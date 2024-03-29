'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from '../frames/Header';
import { TNodes } from '@/types/types';
import { Footer } from '../frames/Footer';
import I18nProvider from '@/context/languageContext';

export default function ({ children }: TNodes) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <main className='bg-bodyBg relative'>
          <div className='hidden md:block'>
            <Header />
          </div>

          <div className='w-full mb-[150px] md:mb-[120px]'>{children}</div>

          <Footer />
        </main>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export function AuthLayout({ children }: TNodes) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
