import Head from 'next/head';

import Footer from '../components/footer';
import Header from '../components/header';
import MobileFloater from '../components/mobilefloater';

export default function Layout({ darkHeader, children }) {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header darkHeader={darkHeader} />
      <main>{children}</main>
      <Footer />
      <MobileFloater />
    </div>
  );
}
