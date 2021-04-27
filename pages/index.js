/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'swiper/swiper-bundle.css';

import cs from 'classnames';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useCountUp } from 'react-countup';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { useResizeDetector } from 'react-resize-detector';
import { Carousel } from 'react-responsive-carousel';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { coreItems, expertise, portfolio, process, processNav, stats } from '../assets/data';
import Button from '../components/button';
import Layout from '../components/layout';
import Project from '../components/project';
import styles from './index.module.css';

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 30px)',
  width: 30,
  height: 30,
  outline: 'none',
  background: 'transparent',
  border: 'none',
  fontSize: 60,
  fontWeight: 'bold',
  cursor: 'pointer',
};

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Home() {
  const [selectedNav, setSelectedNav] = useState(0);
  const { width, ref } = useResizeDetector();

  const isSmall = width < 575;
  const isMedium = width < 980;

  return (
    <Layout>
      <Head>
        <title>Website</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.video__container}>
        <div className={styles.video__wrapper}>
          <video
            loop
            muted
            autoPlay
            className={styles.video}
            poster="https://www.unifiedinfotech.net/assets/images/banner.jpg">
            <source
              src="https://www.unifiedinfotech.net/assets/videos/uipl-banner-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.video__overlay}></div>
        <div className={styles.video__hero}>
          <div className={styles.hero__text}>
            Your technology partner for innovative and impactful digital solutions.
          </div>
          <div className={styles.call_to_action}>
            <Button dark>View case studies</Button>
            <div style={{ width: '24px' }}></div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </section>
      <section className={styles.stats}>
        {stats.map((detail, index) => (
          <StatCard key={index} detail={detail} />
        ))}
      </section>
      <section className={styles.standout}>
        <div className={styles.standout__left}>
          <h2 className={styles.standout__title}>How we stand out - We are Proactive Experts</h2>
          <p className={styles.standout__subtitle}>
            We proactively consult, design, develop &amp; scale robust web, mobile &amp; custom
            software solutions, that fuel innovation &amp; deliver digital success!
          </p>
          <p className={styles.standout__desc}>
            At Unified we believe that every project is an important milestone in our journey. So we
            position ourselves as a boutique digital agency, custom tailoring impactful digital
            solutions with industry best practices across the board, for Fortune 500s, SMEs, and
            Start-up’s around the globe.
          </p>
          <Button borderedReverse>Request Consultation</Button>
        </div>
        <div className={styles.standout__right}>
          <img
            data-sizes="xl, l, s"
            data-srcset="
                    https://www.unifiedinfotech.net/assets/images/New-Home-Welcome-Image@3x.jpg,
                    https://www.unifiedinfotech.net/assets/images/New-Home-Welcome-Image@2x.jpg,
                    https://www.unifiedinfotech.net/assets/images/New-Home-Welcome-Image.jpg"
            src="https://www.unifiedinfotech.net/assets/images/New-Home-Welcome-Image@2x.jpg"
            alt="New-Home-Welcome"
          />
        </div>
      </section>
      <section className={styles.core__title}>
        <div className={styles.core__title__left}>Core</div>
        <div className={styles.core__title__right}>services</div>
      </section>
      <section className={styles.core__content__wrapper}>
        <div className={styles.core__content}>
          {coreItems.map(({ id, icon, name, desc, action }) => (
            <div key={id} className={styles.core__item}>
              <div className={styles.core__icon}>{icon}</div>
              <h3>{name}</h3>
              <p>{desc}</p>
              <a className={styles.core__btn}>
                {action}
                <div style={{ width: 12 }}></div>
                <BsChevronRight />
              </a>
            </div>
          ))}
        </div>
        <div className={styles.core__content__btn}>
          <Button borderedReverse>Contact Us</Button>
        </div>
      </section>
      <section className={styles.core__title}>
        <div className={styles.core__title__left}>Portfolio that</div>
        <div className={styles.core__title__right}>speak!</div>
      </section>
      <section ref={ref} style={{ backgroundColor: '#F2FBFE' }}>
        <Carousel
          swipeable
          infiniteLoop
          autoPlay={isMedium}
          showThumbs={false}
          showStatus={false}
          showIndicators={isMedium}
          showArrows={!isMedium && !isSmall}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                title={label}
                onClick={onClickHandler}
                style={{ ...arrowStyles, left: 60 }}>
                <BsChevronLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                title={label}
                onClick={onClickHandler}
                style={{ ...arrowStyles, right: 60 }}>
                <BsChevronRight />
              </button>
            )
          }>
          {portfolio.map(({ id, name, title, img, desc }) => (
            <div key={id} style={isSmall ? {} : { padding: '5%' }}>
              <section className={styles.standout}>
                <div className={cs(styles.standout__right, styles.carousel__right)}>
                  <img src={img} alt="New-Home-Welcome" />
                </div>
                <div className={cs(styles.standout__left, styles.carousel__left)}>
                  <h2 className={styles.carousel__heading}>{name}</h2>
                  <h2 className={cs(styles.standout__title, styles.carousel__title)}>{title}</h2>
                  <p className={cs(styles.standout__subtitle, styles.carousel__desc)}>{desc}</p>
                  <div className={styles.flex}>
                    <div style={{ marginBottom: '24px' }}>
                      <Button borderedReverse>View portfolio</Button>
                    </div>
                    <div style={{ width: 24 }}> </div>

                    <div style={{ marginBottom: '24px' }}>
                      <Button borderedReverse dark>
                        Contact us
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Carousel>
      </section>
      <section className={styles.process}>
        <div className={styles.process__heading}>Our Process</div>
        <div className={styles.process__content}>
          <div className={styles.process__content__left}>
            <div className={styles.process__content__nav}>
              <ul>
                {processNav.map(({ id, name }) => (
                  <li
                    key={id}
                    onClick={() => setSelectedNav(id - 1)}
                    className={cs({
                      [styles.process__nav__selected]: id - 1 === selectedNav,
                    })}>{`${id}. ${name}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.process__content__right}>
            <Carousel
              swipeable
              infiniteLoop
              showThumbs={false}
              showArrows={false}
              showStatus={false}
              showIndicators={isMedium}
              selectedItem={selectedNav}
              axis={!isMedium ? 'vertical' : undefined}>
              {process.map(({ id, title, img, desc }) => (
                <div key={id}>
                  <section className={cs(styles.standout, styles.standout__carousel)}>
                    <div className={cs(styles.standout__right, styles.carousel__right)}>
                      <img src={img} alt="New-Home-Welcome" />
                    </div>
                    <div className={cs(styles.standout__left, styles.carousel__left)}>
                      <h2
                        className={cs(
                          styles.standout__title,
                          styles.carousel__title,
                          styles.process__title
                        )}>
                        {title}
                      </h2>
                      <p
                        className={cs(
                          styles.standout__subtitle,
                          styles.carousel__desc,
                          styles.process__desc
                        )}>
                        {desc}
                      </p>
                      <div style={{ paddingBottom: 48 }} className={styles.flex}>
                        <Button bordered dark>
                          get in touch
                        </Button>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className={styles.expertise}>
        <h2 className={styles.expertise__title}>Our expertise</h2>
        {!isMedium && (
          <>
            <div className={styles.expertise__left__btn}>
              <BsChevronLeft size={40} />
            </div>
            <div className={styles.expertise__right__btn}>
              <BsChevronRight size={40} />
            </div>
          </>
        )}
        <Swiper
          loop
          autoPlay={{
            delay: 2000,
          }}
          navigation={
            isMedium
              ? false
              : {
                  prevEl: `.${styles.expertise__left__btn}`,
                  nextEl: `.${styles.expertise__right__btn}`,
                }
          }
          spaceBetween={32}
          slidesPerView={isMedium ? 2 : 4}>
          {expertise.map(({ id, name, desc, img }) => (
            <SwiperSlide key={id}>
              <div className={styles.expertise__content}>
                <div className={styles.expertise__img}>
                  <img src={img} alt={name} />
                </div>
                <div className={styles.expertise__name}>{name}</div>
                <div className={styles.expertise__desc}>{desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Project />
    </Layout>
  );
}

const StatCard = ({ detail }) => {
  const { id, name } = detail;

  const [view, setView] = useState(false);

  const { ref: statsRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !view) {
      setView(true);
    }
  }, [inView, view]);

  return (
    <div key={id} className={styles.stat}>
      <div ref={statsRef} key={id} className={styles.stat_wrapper}>
        {view ? <CountNum detail={detail} /> : 0}
        <div className={styles.stat__title}>{name}</div>
      </div>
    </div>
  );
};

const CountNum = ({ detail }) => {
  const { value, postfix = '', prefix = '' } = detail;

  const { countUp } = useCountUp({ end: value, duration: 3 });

  console.log(Number(countUp).toFixed());
  return (
    <div className={styles.stat__value}>{`${prefix}${parseInt(
      countUp
    ).toLocaleString()}${postfix}+`}</div>
  );
};
