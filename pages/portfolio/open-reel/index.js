import cs from 'classnames';
import Head from 'next/head';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillCheckSquare } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { useResizeDetector } from 'react-resize-detector';

import Button from '../../../components/button';
import Layout from '../../../components/layout';

import styles from './open-reel.module.css';

import { overviewLinks, parallaxMeta, serviceList, results } from '../../../assets/data';
import { useEffect, useState } from 'react';

export default function OpenReel() {
  const { width, ref } = useResizeDetector();

  const isMedium = width < 980;

  const { ref: overviewRef, inView: overviewInView } = useInView({
    threshold: 0,
  });

  const { ref: strategyRef, inView: strategyInView } = useInView({
    threshold: 0,
  });

  const { ref: seamlessRef, inView: seamlessInView } = useInView({
    threshold: 0,
  });

  return (
    <Layout darkHeader>
      <Head>
        <title>Open Reel</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section ref={ref} className={styles.wrapper}>
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
      <section ref={overviewRef} className={styles.overview}>
        <div className={styles.overview__content}>
          <div
            className={cs(styles.overview__content__left, {
              [styles.overview__in_view]: overviewInView === true,
            })}>
            <h2>Evolving stories brought to life!</h2>
            <p>
              OpenReel started with a vision of changing the video world by creating the ability to
              capture footage remotely. That journey geared towards developing an innovative video
              and marketing platform that’s utilized from small business to global enterprise.
            </p>
            <p className="mt-3">
              We teamed up to deliver an intuitive and updated platform that speaks to a broader
              audience enabling them to capture up to 4K video anywhere be it on the phone, iPad or
              computer right from the desk.
            </p>
            <div className={styles.overview__links}>
              {overviewLinks.map(({ id, action, name }) => (
                <div key={id} className={styles.overview__link}>
                  <p>
                    <a>
                      {action}
                      <strong>{name}</strong>
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.overview__content__right}>
            <div className={styles.overview__services__box}>
              <div className={styles.overview__services}>Services</div>
              <ul className={styles.overview__services__list}>
                {serviceList.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section ref={strategyRef} className={styles.strategy}>
        <div
          className={cs(styles.strategy__left, {
            [styles.strategy__in_view]: strategyInView === true,
          })}>
          <h2>
            Intelligent Strategy <br />
            and Planning
          </h2>
          <p>
            The OpenReel platform encompasses different modules consisting of remote director
            control guiding a user to record a video through his device, chrome plugin, and a mobile
            app to shoot users’ own video, campaign creation and analytics.
          </p>
          <p className="mt-3">
            Hence following a design thinking approach was inevitable to understand how the system
            works at a holistic level by doing user persona, task-flow analysis, and high fidelity
            wireframes.
          </p>
        </div>
        <div className={styles.strategy__right}>
          <img
            alt={'strategy'}
            src={'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Strategy@2x.jpg'}
          />
        </div>
      </section>
      <section ref={seamlessRef} className={styles.seamless}>
        <div
          className={cs(styles.seamless__title, {
            [styles.seamless__in_view]: seamlessInView === true,
          })}>
          <h1>Seamless User Experience</h1>
          <p>
            Ensuring a quality cross channel customer journey, the entire system flow depicts a
            great user experience, with not only OpenReel’s use in mind but also the entire process
            of acquiring, owning, and even troubleshooting it. We identified roadblocks, triggers
            and next steps to deliver a meaningful experience.
          </p>
        </div>
        <div className={styles.seamless__slider}>
          <div className={styles.seamless__slide}>
            <img
              alt={'seamless'}
              src={
                'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Seamless-Slider-Image@2x.png'
              }
            />
            <img
              alt={'seamless'}
              src={
                'https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Seamless-Slider-Image@2x.png'
              }
            />
          </div>
        </div>
      </section>
      {parallaxMeta(styles, isMedium).map((detail, index) => (
        <ParallaxCard title={isMedium ? index === 0 : true} detail={detail} key={index} />
      ))}
      <section className={styles.integrations}>
        <div className={styles.integrations__left}>
          <IntegrationImages />
        </div>
        <div className={styles.integrations__right}>
          <h2>3rd party integrations</h2>
          <p>
            The ecosystem of web app development keeps evolving and to make it state-of-the-art, all
            you need to do is keep adopting and stay on course. OpenReel comes with the right
            choices of application with regard to the abundant market offer.
          </p>
        </div>
      </section>
      <section className={styles.results}>
        <h1>Results delivered</h1>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <AiFillCheckSquare size={28} />
              <p style={{ width: 12 }}></p>
              {result}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

const ParallaxCard = ({ detail = {}, title = true }) => {
  const { img, name, desc, className } = detail;

  const [view, setView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !view) {
      setView(inView);
    }
  }, [inView]);

  return (
    <section className={cs(styles.parallax, className)}>
      <div className={styles.parallax__content}>
        <div className={styles.parallax__img}>
          <div className={styles.parallax__slider}>
            <div className={styles.parallax__slider__holder}>
              {title && <h2>Key Features</h2>}
              <img alt={name} src={img} />
            </div>
          </div>
        </div>
        <div ref={ref} className={styles.parallax__features}>
          <div className={styles.parallax__features__left}></div>
          <div className={styles.parallax__features__right}>
            <div
              className={cs(styles.parallax__features__text, {
                [styles.parallax__text__in_view]: view === true,
              })}>
              <h2>{name}</h2>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationImages = () => {
  const refs = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) =>
    useInView({
      threshold: 0,
    })
  );

  return (
    <div className={styles.integration__images}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <IntegrationImage id={n} />
      ))}
    </div>
  );
};

const IntegrationImage = ({ id }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <img
      key={id}
      ref={ref}
      className={cs(styles.integration__img, styles[`integration__img_${id}`], {
        [styles.img__inview]: inView === true,
      })}
      src={`https://www.unifiedinfotech.net/assets/images/Portfolio-Section-Browser-Screens-Integrations-00${id}@2x.png`}
    />
  );
};
