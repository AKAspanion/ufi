import cs from 'classnames';
import Head from 'next/head';
import { FaQuoteLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { useResizeDetector } from 'react-resize-detector';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Button from '../components/button';
import Layout from '../components/layout';

import styles from './index.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const stats = [
  { id: 1, name: 'Years in the business', value: '10+' },
  { id: 2, name: 'Solutions delivered', value: '1,200+' },
  { id: 3, name: 'Technology experts', value: '150+' },
  { id: 4, name: 'Business delivered', value: '$50M+' },
];

const portfolio = [
  {
    id: 1,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 2,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 3,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 4,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 5,
    name: 'Openreel Inc.',
    title: 'A patented multi-million SaaS video platform',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 6,
    name: 'Sofy TV',
    title: 'An award-winning video streaming app platform',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
];

const process = [
  {
    id: 1,
    title: 'Discovery Workshop',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 2,
    title: 'Planning',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 3,
    title: 'Design',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 4,
    title: 'Development',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
  {
    id: 5,
    title: 'Testing',
    img:
      'https://www.unifiedinfotech.net/assets/images/OpenReel-Home-V3@4x.png',
    desc:
      'We created a patented video platform that helps capture and direct video remotely. This has helped companies reduce production cost, resource and time. Now shoot video without even stepping out of your comfort zone.',
  },
  {
    id: 6,
    title: 'Maintainence',
    img: 'https://www.unifiedinfotech.net/assets/images/Largo-Home-V3@4x.png',
    desc:
      'We designed and developed this AI powered video streaming platform to give a tiff to streaming giants like Netflix and Hulu. We created an out of the box experience to help make the product award-winning.',
  },
];

const processNav = [
  {
    id: 1,
    name: 'Discovery Workshop',
  },
  {
    id: 2,
    name: 'Planning',
  },
  {
    id: 3,
    name: 'Design',
  },
  {
    id: 4,
    name: 'Development',
  },
  {
    id: 5,
    name: 'Testing',
  },
  {
    id: 6,
    name: 'Maintainence',
  },
];

const praiseList = [
  {
    name: 'Cecil Usher',
    title: 'CEO, Music Plug LLC',
    quote:
      'It really transcends everything we’ve done to date. Everyone who’s seen the app has loved it.',
  },
  {
    name: 'Leonardo Rodriguez',
    title: 'Technical PM, Reliable Group',
    quote:
      'The team’s in-depth knowledge of user interaction and behavior resulted in an impressive UI/UX design.',
  },
  {
    name: 'Fabien Mahieu',
    title: 'Co-Founder/Director Flexiwork, UK',
    quote: 'They’re available to help us around the clock.',
  },
];

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

const indicatorStyles = {
  background: '#ccc',
  width: 8,
  height: 8,
  outline: 'none',
  cursor: 'pointer',
  userSelect: 'none',
  borderRadius: 4,
  display: 'inline-block',
  margin: '0 8px',
};

export default function Home() {
  const [selectedNav, setSelectedNav] = useState(0);
  const { width, ref } = useResizeDetector();

  const isSmall = width < 575;
  const isMedium = width < 980;
  return (
    <Layout home>
      <Head>
        <title>Website</title>
        <link
          rel="preload"
          href="/fonts/circular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <section className={styles.video__container}>
        <div className={styles.video__wrapper}>
          <video
            loop
            muted
            autoPlay
            className={styles.video}
            poster="https://www.unifiedinfotech.net/assets/images/banner.jpg"
          >
            <source
              src="https://www.unifiedinfotech.net/assets/videos/uipl-banner-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.video__overlay}></div>
        <div className={styles.video__hero}>
          <div className={styles.hero__text}>
            Your technology partner for innovative and impactful digital
            solutions.
          </div>
          <div className={styles.call_to_action}>
            <Button dark>View case studies</Button>
            <div style={{ width: '24px' }}></div>
            <Button>Contact Us</Button>
          </div>
        </div>
      </section>
      <section className={styles.stats}>
        {stats.map(({ id, name, value }) => (
          <div key={id} className={styles.stat}>
            <div key={id} className={styles.stat_wrapper}>
              <div className={styles.stat__value}>{value}</div>
              <div className={styles.stat__title}>{name}</div>
            </div>
          </div>
        ))}
      </section>
      <section className={styles.standout}>
        <div className={styles.standout__left}>
          <h2 className={styles.standout__title}>
            How we stand out - We are Proactive Experts
          </h2>
          <p className={styles.standout__subtitle}>
            We proactively consult, design, develop &amp; scale robust web,
            mobile &amp; custom software solutions, that fuel innovation &amp;
            deliver digital success!
          </p>
          <p className={styles.standout__desc}>
            At Unified we believe that every project is an important milestone
            in our journey. So we position ourselves as a boutique digital
            agency, custom tailoring impactful digital solutions with industry
            best practices across the board, for Fortune 500's, SMEs, and
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
            alt="New-Home-Welcome-Image"
          />
        </div>
      </section>
      <section className={styles.core__title}>
        <div className={styles.core__title__left}>Core</div>
        <div className={styles.core__title__right}>services</div>
      </section>
      <section className={styles.core__content__wrapper}>
        <div className={styles.core__content}>
          <div className={styles.core__item}>
            <div className={styles.core__icon}>
              <div className={styles.core__iconplaceholder}></div>
            </div>
            <h3>
              Web <br /> Development
            </h3>
            <p>
              For 10+ years now, we’ve mastered the top web technologies to
              deliver projects that have raked in investments. A trusted market
              leader in developing high performing web fronts for every
              business.
            </p>
            <a className={styles.core__btn}>Explore</a>
          </div>
          <div className={styles.core__item}>
            <div className={styles.core__icon}>
              <div className={styles.core__iconplaceholder}></div>
            </div>
            <h3>
              Web <br /> Design
            </h3>
            <p>
              We not only keep up with the ‘design trends’ but focus on users,
              which makes our services the most fruitful in the entire market.
              Delivering excellence since 2010.
            </p>
            <a className={styles.core__btn}>Explore</a>
          </div>
          <div className={styles.core__item}>
            <div className={styles.core__icon}>
              <div className={styles.core__iconplaceholder}></div>
            </div>
            <h3>
              Mobile App <br /> Development
            </h3>
            <p>
              We build mobile apps that are loved by users. Taking the benefits
              of Artificial intelligence, ML, IoT and other high-end
              technologies to create app masterpiece that sustains.
            </p>
            <a className={styles.core__btn}>Explore</a>
          </div>
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
                style={{ ...arrowStyles, left: 60 }}
              >
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
                style={{ ...arrowStyles, right: 60 }}
              >
                <BsChevronRight />
              </button>
            )
          }
        >
          {portfolio.map(({ id, name, title, img, desc }) => (
            <div key={id} style={{ padding: '5%' }}>
              <section className={styles.standout}>
                <div
                  className={cs(styles.standout__right, styles.carousel__right)}
                >
                  <img src={img} alt="New-Home-Welcome-Image" />
                </div>
                <div
                  className={cs(styles.standout__left, styles.carousel__left)}
                >
                  <h2 className={styles.carousel__heading}>{name}</h2>
                  <h2
                    className={cs(
                      styles.standout__title,
                      styles.carousel__title,
                    )}
                  >
                    {title}
                  </h2>
                  <p
                    className={cs(
                      styles.standout__subtitle,
                      styles.carousel__desc,
                    )}
                  >
                    {desc}
                  </p>
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
                    })}
                  >{`${id}. ${name}`}</li>
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
              axis={!isMedium ? 'vertical' : undefined}
            >
              {process.map(({ id, title, img, desc }) => (
                <div key={id}>
                  <section className={styles.standout}>
                    <div
                      className={cs(
                        styles.standout__right,
                        styles.carousel__right,
                      )}
                    >
                      <img src={img} alt="New-Home-Welcome-Image" />
                    </div>
                    <div
                      className={cs(
                        styles.standout__left,
                        styles.carousel__left,
                      )}
                    >
                      <h2
                        className={cs(
                          styles.standout__title,
                          styles.carousel__title,
                          styles.process__title,
                        )}
                      >
                        {title}
                      </h2>
                      <p
                        className={cs(
                          styles.standout__subtitle,
                          styles.carousel__desc,
                          styles.process__desc,
                        )}
                      >
                        {desc}
                      </p>
                      <div
                        style={{ paddingBottom: 48 }}
                        className={styles.flex}
                      >
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
      <section className={styles.project}>
        <div className={styles.project__left}>
          <Carousel
            swipeable
            infiniteLoop
            showThumbs={false}
            autoPlay={isMedium}
            showThumbs={false}
            showStatus={false}
            showArrows={!isMedium && !isSmall}
          >
            {praiseList.map(({ name, title, quote }, index) => (
              <div key={index} style={{ padding: '5%' }}>
                <section className={styles.praise}>
                  <div className={styles.praise__img}></div>
                  <div className={styles.praise__logo}></div>
                  <div className={styles.praise__quote}>
                    <blockquote>
                      <FaQuoteLeft size={33} color="#C7C7C7" /> {quote}
                    </blockquote>
                  </div>
                  <div className={styles.praise__name}>{name}</div>
                  <div className={styles.praise__title}>{title}</div>
                </section>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.project__right}>
          <h3>
            Have a project to discuss?
            <br />
            Get in touch.
          </h3>
          <div className={styles.project__input__wrapper}>
            <div className={cs(styles.project__input)}>
              <label>Name *</label>
              <input />
            </div>
          </div>

          <div className={styles.project__input__wrapper}>
            <div
              className={cs(
                styles.project__input,
                styles.project__input__right,
              )}
            >
              <label>Email *</label>
              <input />
            </div>
            <div style={{ width: '24px' }}></div>
            <div
              className={cs(styles.project__input, styles.project__input__left)}
            >
              <label>Phone</label>
              <input />
            </div>
          </div>
          <div className={styles.project__input__wrapper}>
            <div className={cs(styles.project__input)}>
              <label>Message</label>
              <textarea placeholder="Type your message here..." />
            </div>
          </div>
          <div className={styles.project__nda}>
            Note: We’ll keep your idea confidential with a signed NDA.
          </div>
          <Button bordered dark>
            Submit
          </Button>
        </div>
      </section>
    </Layout>
  );
}
