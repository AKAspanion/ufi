/* eslint-disable react-hooks/exhaustive-deps */
import cs from 'classnames';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { services } from '../../assets/data';
import Layout from '../../components/layout';
import styles from './services.module.css';

export default function Services() {
  useEffect(() => {
    services.map(({ img }) => {
      const newImg = new Image();
      newImg.src = img;
    });
  });

  return (
    <Layout darkHeader>
      <Head>
        <title>Top development services for Web, Mobile and Design</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.banner}>
        <h1>OUR SERVICES</h1>
        <p>
          Startup or a Fortune 500 company, Unified Infotech will act as your consultant and
          development partners to transform your idea into success. Take advantage of our
          full-service capabilities.
        </p>
      </section>
      <section className={styles.service__wrapper}>
        {services.map((detail, index) => (
          <ServiceCard key={index} detail={detail} />
        ))}
      </section>
    </Layout>
  );
}

const ServiceCard = ({ detail }) => {
  const [view, setView] = useState(false);

  const { id, name, img, bgColor, orientation, desc, links, isFifty } = detail;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !view) {
      setView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      key={id}
      style={{ '--bg-color': bgColor ?? 'white' }}
      className={cs(styles.service, {
        [styles.service__reverse]: orientation !== 'left',
        [styles.service__center]: orientation === 'center',
        [styles.service__fifty]: isFifty === true,
      })}>
      <div
        className={cs(styles.service__left, {
          [styles.service__left__inview]: view === true,
        })}>
        <div className={styles.img__placeholder} />
        <img alt={name} src={img} />
      </div>
      <div className={styles.service__right}>
        <h3>{name}</h3>
        <p>{desc}</p>
        <ul>
          {links.map((l, i) => (
            <li key={i}>
              {l}
              <i className="la la-angle-right"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
