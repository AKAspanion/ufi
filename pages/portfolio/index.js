import cs from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';
import { work } from '../../assets/data';
import Button from '../../components/button';
import Layout from '../../components/layout';

let scrollTimeout;

export default function Portfolio() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    work.map(({ img }) => {
      const image = new Image();
      image.src = img;
    });

    const onscroll = function () {
      clearTimeout(scrollTimeout);

      setScrolling(true);

      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 10);
    };

    window.addEventListener('scroll', onscroll);

    () => window.removeEventListener('scroll', onscroll);
  }, []);

  return (
    <Layout darkHeader>
      <Head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.portfolio__wrapper}>
        <h2 className={styles.portfolio__heading}>Our Work</h2>
        <p className={styles.portfolio__description}>
          Some highlights of our favorite projects we've done
          <br /> for forward thinking clients.
        </p>
      </section>

      <section className={styles.portfolio__list__wrapper}>
        {work.map((detail, index) => (
          <PortfolioCard key={index} detail={detail} scrolling={scrolling} />
        ))}
      </section>
    </Layout>
  );
}

const PortfolioCard = ({ key, detail = {}, scrolling }) => {
  const [view, setView] = useState(false);
  const { id, img, link = '#', name, color, description, tags } = detail;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !view && !scrolling) {
      setView(true);
    }
  }, [inView, scrolling]);

  return (
    <div ref={ref} key={key} className={styles.portfolio__list__item}>
      <div
        className={cs(styles.portfolio__list__item__img, {
          [styles.img__inview]: view === true,
        })}
      >
        <Link href={link}>
          <div className={styles.portfolio__list__item__wrapper}>
            <img alt={name} src={img} />
          </div>
        </Link>
      </div>
      <div className={styles.portfolio__list__item__data}>
        <div
          style={{ '--title-color': color }}
          className={styles.portfolio__list__item__title}
        >
          <Link href={link}>{name}</Link>
        </div>
        <div className={styles.portfolio__list__item__desc}>
          <Link href={link}>{description}</Link>
        </div>
        <div className={styles.portfolio__list__item__tags}>
          {tags.map(tag => (
            <>
              <Button tag>{tag}</Button>
              <div style={{ width: 16 }}></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
