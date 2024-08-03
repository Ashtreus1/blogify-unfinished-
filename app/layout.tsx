'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Head from 'next/head';
import './globals.css';  

import { ThemeProvider } from "@/components/theme-provider";


const RouteChangeHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChangeStart = () => NProgress.start();
    const handleRouteChangeComplete = () => NProgress.done();
    const handleRouteChangeError = () => NProgress.done();

    handleRouteChangeStart();
    NProgress.done();

    return () => {
      handleRouteChangeComplete();
    };
  }, [pathname]); 

  return null;
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteChangeHandler />
      <Head>
        <title>Blogify</title>
        <meta name="description" content="Writing your own thoughts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en" className="scroll-smooth">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
