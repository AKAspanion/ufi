import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/Circular-Std.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
