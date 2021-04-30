/* eslint-disable react-hooks/exhaustive-deps */
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import cs from 'classnames';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useResizeDetector } from 'react-resize-detector';
import { Carousel } from 'react-responsive-carousel';

import { gallery, praiseListStartup, services } from '../../assets/data';
import Button from '../../components/button';
import Layout from '../../components/layout';
import startupStyles from '../services/startup-consulting/startup-consulting.module.css';
import styles from './services.module.css';

export default function Services() {
  const { width, ref } = useResizeDetector();

  const isMedium = width < 980;

  const { ref: newYorkRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    services.map(({ img }) => {
      const newImg = new Image();
      newImg.src = img;
    });

    gallery.map(({ img }) => {
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
      <section ref={ref} className={styles.banner}>
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
      <section
        ref={newYorkRef}
        className={cs(styles.new__york__wrapper, {
          [styles.new__york__inview]: inView === true,
        })}>
        <img
          alt="new york"
          src={'https://www.unifiedinfotech.net/assets/images/mobile-app-nyc-banner@2x.jpg'}
        />
        <div className={styles.new__york}>
          <div className={styles.new__york__content}>
            <h3>About our New York presence</h3>
            <p>
              New York became the place for one of our major company expansions. Pay us visit at 79
              Madison Avenue!
            </p>
            <ul>
              <li>
                App development in New York
                <i className="la la-angle-right"></i>
              </li>
              <li>
                Web design services in New York
                <i className="la la-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.gallery__wrapper}>
        <h2>Pristine touch in every pixel</h2>
        <div className={styles.gallery}>
          {gallery.map((detail, index) => (
            <GalleryCard key={index} detail={detail} />
          ))}
        </div>
        <div style={{ height: 48 }}></div>
        <Button dark bordered>
          view gallery
        </Button>
        <div style={{ height: 48 }}></div>
      </section>
      <section
        className={cs(startupStyles.consulting__start__8, startupStyles.mobile__app__sec__9)}>
        <div className={'container'}>
          <div
            className={cs([startupStyles.common__text, startupStyles.text__black, 'text-center'])}>
            <h3
              className={cs([
                'h2',
                startupStyles.treat__as__h1,
                'mb-0 font-weight-bold text-center mb-4',
              ])}>
              From people like you
            </h3>
          </div>
          <Carousel
            swipeable
            infiniteLoop
            showThumbs={false}
            autoPlay={isMedium}
            showStatus={false}
            showArrows={false}>
            {praiseListStartup.map(({ name, title, quote }, index) => (
              <div key={index}>
                <section className={startupStyles.praise}>
                  <div className={startupStyles.praise__left}>
                    <FaQuoteLeft size={48} color="#C7C7C7" />
                  </div>
                  <div className={startupStyles.praise__right}>
                    <div className={cs(startupStyles.praise__quote, 'text-left')}>
                      <blockquote></blockquote>
                      <span className={'text-left font-weight-bold'}>{quote}</span>
                    </div>
                    <div className={cs(startupStyles.praise__name, 'text-left')}>{name}</div>
                    <div className={cs(startupStyles.praise__title, 'text-left')}>{title}</div>
                  </div>
                </section>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </Layout>
  );
}

const GalleryCard = ({ detail }) => {
  const [view, setView] = useState(false);

  const { id, name, img } = detail;

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
      className={cs(styles.gallery__item, {
        [styles.gallery__item__inview]: view === true,
      })}>
      <img alt={name} src={img} />
      <h3>{name}</h3>
    </div>
  );
};

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
