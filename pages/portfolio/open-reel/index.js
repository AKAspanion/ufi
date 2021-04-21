import Head from 'next/head';
import { BsPlayFill } from 'react-icons/bs';

import Button from '../../../components/button';
import Layout from '../../../components/layout';

import styles from './open-reel.module.css';

export default function OpenReel() {
  return (
    <Layout darkHeader>
      <Head>
        <title>Open Reel</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>OpenReel Inc.</h1>
          <p>
            OpenReel’s patented video platform allows you to
            <br /> capture and direct video remotely saving over 80% on
            <br /> production cost, time and resources. Shoot HD video
            <br /> without ever stepping in the location.
          </p>
        </div>
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__content}>
            <div className={styles.hero__btn}>
              <Button dark icon>
                <BsPlayFill size={32} />
              </Button>
            </div>
            <img
              alt="open-reel"
              src={
                'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Videozone@2x.jpg'
              }
            />
          </div>
        </div>
      </section>
      <section className={styles.overview}>
        <div className={styles.overview__content}>TODO</div>
      </section>
    </Layout>
  );
}
