/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import 'swiper/swiper-bundle.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import cs from 'classnames';
import Head from 'next/head';
import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useResizeDetector } from 'react-resize-detector';
import { Carousel } from 'react-responsive-carousel';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  practicesWeFollow,
  praiseListAppDev,
  swiperAppImage,
  whatWeDevelop,
} from '../../../assets/data';
import Layout from '../../../components/layout';
import styles from '../startup-consulting/startup-consulting.module.css';
import mobileStyles from './mobile-app.module.css';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function MobileDevelopment() {
  const { width, ref } = useResizeDetector();

  const [collapsible, setcollapsible] = useState({
    activeId: 1,
  });

  const handleCollapse = (id) => {
    setcollapsible((prevState) => ({
      ...prevState,
      activeId: id,
    }));
  };

  const isSmall = width < 575;
  const isMedium = width < 980;

  return (
    <Layout darkHeader>
      <Head>
        <title>Mobile Application Development</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section
        ref={ref}
        className={cs([
          styles.banner__sec__text,
          styles.consulting__banner__sec,
          styles.common__hero__text__wrap,
        ])}>
        <div className={cs('container-fluid p-0')}>
          <div className={cs('row justify-content-start')}>
            <div className={cs('col-sm-11 col-md-10 col-lg-9 col-xl-8')}>
              <div className={cs(styles.others__banner__text)}>
                <p className={cs(styles.new__page__subtitle)}>MOBILE APP DEVELOPMENT</p>
                <h1 className={cs(styles.new__page__title)}>
                  <span>
                    We leverage the mobile device capabilities to create a memorable end-user
                    experience to spur your brand’s growth. A trusted mobile app development company
                    for world-className brands.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={cs(mobileStyles.mobile__app__sec__1)}>
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0'])}>
            <div
              id="StartUp"
              className={cs([styles.consulting__start__add1, mobileStyles.app__sec__img])}>
              <div className={cs(styles.consulting__banner)}>
                <img
                  className={cs(styles.blur__out)}
                  src="https://www.unifiedinfotech.net/assets/images/mobile-app-banner@1x.jpg"
                  alt="startup consulting services"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={cs([mobileStyles.mobile__app__sec__2])}>
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0'])}>
            <div className={cs(['col-md-6', 'p-0'])}>
              <div className={cs([mobileStyles.app__message__info])}>
                <div className={cs([styles.common__text, styles.text__black])}>
                  <h2 className={cs([styles.h3, 'mb-3'])}>
                    A leading name in mobile app development in India &amp; USA
                  </h2>
                  <p>
                    When users are exposed to hundreds of apps- yours, need to be strikingly
                    distinctive. Hence Unified Infotech will act as an end-to-end software
                    development partner, serving as a catalyst to your success. We take pride in
                    delivering human-centric experiences for your mobile app that are valuable and
                    meaningful to your end-users through a combination of smart consultation,
                    game-changing strategies, sterling{' '}
                    <a
                      className={cs([styles.text__black, styles.text__underline])}
                      href="https://www.unifiedinfotech.net/services/ui-ux-design/">
                      UI/UX design services
                    </a>
                    , and the latest technologies. Our mobile app developer team can help you create
                    an impactful mobile app that reflects your brand and sets your stage within a
                    short time frame.
                  </p>
                </div>
              </div>
            </div>
            <div className={cs(['col-md-4', 'align-self-center', 'p-0'])}>
              <div className={cs([mobileStyles.mobility__right])}>
                <div
                  className={cs([mobileStyles.item__right__top, 'aos-init', 'aos-animate'])}
                  data-aos="fade-down-left">
                  <div className={cs([mobileStyles.item__box__top])}></div>
                </div>
                <div
                  className={cs([mobileStyles.item__right__down, 'aos-init', 'aos-animate'])}
                  data-aos="fade-up-right">
                  <div className={cs([mobileStyles.item__box__down])}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cs([
          mobileStyles.mobile__app__sec__6,
          mobileStyles.mobile__app__responsive,
          mobileStyles.mobile__app__development__we__develop,
          'aos-init',
          'aos-animate',
        ])}
        data-aos="fade-up"
        data-aos-delay="200">
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0', 'justify-content-center'])}>
            <div className={cs(['col-12'])}>
              <div className={cs([styles.common__text, styles.text__black, 'text-center'])}>
                <h2 className={cs([styles.h3, 'mb-5'])}>What We Develop &amp; Deliver</h2>
              </div>
            </div>
            {whatWeDevelop.map(({ title, maintext, link, icon }, index) => (
              <div
                key={index}
                className={cs([
                  'col-12',
                  'col-sm-6',
                  'col-md-6',
                  'col-lg-6',
                  'col-xl-3',
                  'mb-4',
                  mobileStyles.align__end,
                  mobileStyles.border__end,
                  mobileStyles.pad__box,
                ])}>
                <a href={link}>
                  <div
                    className={cs([
                      mobileStyles.card__box,
                      mobileStyles.box__container,
                      mobileStyles.box__dark,
                      mobileStyles.on__hover__show__content,
                    ])}>
                    <div
                      className={cs([
                        mobileStyles.box__top,
                        mobileStyles.common__text,
                        { [styles.text__black__h1]: index % 2 == 0 },
                      ])}>
                      <h2 className={cs(mobileStyles.h2)}>{title}</h2>
                    </div>
                    <div className={cs([mobileStyles.box__bottom])}>
                      <div
                        className={cs([
                          mobileStyles.icon,
                          { [styles.text__black__h1]: index % 2 == 0 },
                        ])}>
                        {icon}
                      </div>
                    </div>
                    <div className={cs([mobileStyles.card__box__footer])}>
                      <div className={cs([mobileStyles.info])}>
                        <p
                          className={cs([
                            mobileStyles.hover__text,
                            { [styles.text__black__h1]: index % 2 == 0 },
                          ])}>
                          {maintext}
                        </p>
                      </div>
                    </div>
                    <div className={cs([mobileStyles.card__blur])}></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={cs([mobileStyles.mobile__app__sec__3, styles.black__bg__info])}>
        <div className={cs(['container'])}>
          <div className={cs(['row', 'justify-content-left'])}>
            <div className={cs(['col-sm-12', 'col-md-10', 'col-lg-8', 'col-xl-7'])}>
              <div className={cs([styles.message__text__wrap])}>
                <div
                  className={cs([
                    styles.text__message__info,
                    styles.common__text,
                    styles.text__white,
                  ])}>
                  <h2 className={cs([styles.h3])}>How we plan to develop your app</h2>
                  <p>
                    When our peers overlook the pre-planning, we never fail to do the basics right.
                    We ask the right questions to our stakeholders that centers around their target
                    audience. This discussion helps our developers in laying down the appropriate
                    blueprint from the system’s perspective. Hence we make the development right.
                    Together, as a reliable mobile app development company, we’ll identify which
                    functionalities hold the most water before development to safeguard the chances
                    for your app’s success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cs([mobileStyles.wirefram__img__wrap])}>
          <div className={cs(['row'])}>
            <div className={cs(['col-sm-12'])}>
              <div className={cs([styles.design__box])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/high-fidelity-wireframe@1x.png"
                  alt="high fidelity wireframe"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cs([mobileStyles.wirefram__mobileimg__wrap, 'overflow-hidden'])}>
          <div className={cs([mobileStyles.swiper__container])}>
            <div className={cs([mobileStyles.swiper__wrapper])}>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Personalisation_05@1x.png"
                  alt="Personalisation"
                />
              </div>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Main-Home@1x.png"
                  alt="Main Home"
                />
              </div>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Payment-for-Subscription@1x.png"
                  alt="Payment for Subscription"
                />
              </div>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Personalisation@1x.png"
                  alt="application testing"
                />
              </div>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Personalisation_01@1x.png"
                  alt="mobile app interface"
                />
              </div>
              <div className={cs([mobileStyles.swiper__slide])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/Write_a_review@1x.png"
                  alt="write a reviews"
                />
              </div>
            </div>
          </div>
          <div className={cs('swiper-scrollbar')}></div>
        </div>
      </section>
      <section className={cs([mobileStyles.mobile__app__sec__4, 'py-5'])}>
        <div className={cs(['container'])}>
          <div className={cs(['row', 'flex-row-reverse', 'justify-content-center'])}>
            <div className={cs(['col-sm-12', 'col-md-6'])}>
              <div
                className={cs([
                  styles.design__box,
                  mobileStyles.uipl__section__reveal__check,
                  mobileStyles.reveal__me,
                ])}>
                <img
                  className={cs([styles.blur__out])}
                  src="https://www.unifiedinfotech.net/assets/images/testing@1x.jpg"
                  alt="testing"
                />
              </div>
            </div>
            <div className={cs(['col-sm-12', 'col-md-6'])}>
              <div
                className={cs([
                  styles.message__text__wrap,
                  'aos-init',
                  'aos-animate',
                  mobileStyles.message__text__wrap,
                ])}
                data-aos="fade-up">
                <div
                  className={cs([
                    styles.text__message__info,
                    styles.common__text,
                    mobileStyles.common__text,
                    styles.text__black__h1,
                  ])}>
                  <h2 className={cs([styles.h3])}>The way we design to engage users</h2>
                  <p>
                    As it gets tougher for design thinkers and developers to get users to find and
                    download apps, you ‘have’ to think about engagement; in order to make your
                    mobile app design relevant, valued and useful so it delights and hence retains
                    user. Time and again, we put ourselves in the end-users shoes to empathize and
                    feel the experience, be it iOS apps or Android application. From content
                    curation, pixel-perfection to intuitive micro-interactions, we leave no stone
                    unturned to build an app that engages.
                  </p>
                  <h5>From ideation to visual manifestation,</h5>
                  <a
                    className={cs([styles.button__4, mobileStyles.button__4])}
                    href="https://www.unifiedinfotech.net/how-we-work/">
                    <div className={cs([styles.eff__4])}></div>
                    <span>The Way We Do It</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cs([mobileStyles.mobile__app__sec__5, styles.black__bg__info])}>
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0', 'justify-content-left'])}>
            <div className={cs(['col-sm-12', 'col-md-12', 'col-lg-4', 'col-xl-5', 'p-0'])}>
              <div
                className={cs([
                  styles.message__text__wrap,
                  'aos-init',
                  'aos-animate',
                  mobileStyles.message__text__wrap,
                ])}
                data-aos="fade-up">
                <div
                  className={cs([
                    styles.text__message__info,
                    styles.common__text,
                    styles.text__white,
                  ])}>
                  <h2 className={cs([styles.h3])}>Developing your app to perform</h2>
                  <p>
                    Performance- one of the biggest predictors of app success - we take it damn
                    seriously. To ensure your idea doesn’t turn into a horror story, we foolproof
                    our mobile app development process. By reducing the app’s response lag,
                    eliminating data redundancy, optimizing memory allocation and implementing
                    high-end data encryption- the result you get is a stunning mobile app
                    experience. And it is evident from the raking user base in App Store as well as
                    Google Play Store for our clients, especially as leading{' '}
                    <a
                      className={cs(['text-underline text-white'])}
                      href="https://www.unifiedinfotech.net/services/mobile-app-development-new-york/">
                      app developers New York
                    </a>{' '}
                    and beyond.
                  </p>
                </div>
              </div>
            </div>
            <div className={cs(['col-sm-12', 'col-md-12', 'col-lg-8', 'col-xl-7', 'p-0'])}>
              <div className={cs([mobileStyles.frem__slider__wrap, 'frem-slider-wrap'])}>
                <div className={cs([mobileStyles.inmobileshowcase])}>
                  <div className={cs([mobileStyles.mobile__showcase])}></div>
                  <Swiper
                    loop
                    autoplay={{
                      delay: 2000,
                    }}
                    navigation
                    spaceBetween={32}
                    slidesPerView={isSmall ? 1 : isMedium ? 3 : 3}>
                    {swiperAppImage.map(({ id, url }) => (
                      <SwiperSlide key={id}>
                        <div className={cs([mobileStyles.swipe__inn])}>
                          <img
                            className={cs([styles.blur__out, mobileStyles.swipe__inn__img])}
                            src={url}
                            alt="favourite more movie receipts"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* <div className={cs(["swiper-button-next"])} tabindex="0" role="button" aria-label="Next slide"><span className={cs(["icon-right-arrow"])}></span></div>
                                            <div className={cs(["swiper-button-prev"])} tabindex="0" role="button" aria-label="Previous slide"><span className={(["icon-left-arrow"])}></span></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={cs([
          styles.mobile__app__sec__8,
          styles.consulting__start__7,
          styles.section__features,
        ])}>
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0'])}>
            <div className={cs(['col-6', 'p-0', styles.client_info_left, styles.white__bg__info])}>
              <div className={cs([styles.client__info__text])}>
                <h3 className={cs([styles.client__h1, styles.text__black__h1])}>Success</h3>
              </div>
            </div>
            <div className={cs(['col-6', 'p-0', styles.client_info_right, styles.black__bg__info])}>
              <div className={cs([styles.stories__info__text])}>
                <h3 className={cs([styles.stories__h1, styles.text__white, 'text-left'])}>
                  stories
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={cs(['container-fluid', styles.work__project__wrap, 'text__center'])}>
          <div className={cs([styles.features__list, 'text-left'])}>
            <div className={cs([styles.feature__item])}>
              <div className={cs(['row', 'justify-content-center'])}>
                <div className={cs(['col-md-6', styles.p__lr__4])}>
                  <div className={cs([styles.work__project__info, styles.content__col])}>
                    <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">
                      <div
                        className={cs([
                          styles.work__project__img,
                          mobileStyles.uipl__section__reveal__check,
                          mobileStyles.reveal__me,
                        ])}>
                        <img
                          className={cs([styles.blur__out])}
                          src="https://www.unifiedinfotech.net/assets/images/freshclinic@1.5x.jpg"
                          alt="startup consulting services"
                        />
                      </div>
                    </a>
                    <div className={cs([styles.work__project__text])}>
                      <img
                        className={cs([styles.project__title])}
                        src="https://www.unifiedinfotech.net/assets/images/toonyport-title.svg"
                        alt="startup consulting services"
                      />
                      <div className={cs([styles.project__text__desc])}>
                        <h3>
                          Created this on-demand marketplace helping nurses connect with doctors,
                          facilitating prescription approval in regards to Botox treatment.
                        </h3>
                      </div>
                      <div className={cs([styles.btn__link__wrap])}>
                        <div className={cs([styles.button__2])}>
                          <div className={cs([styles.eff__2])}></div>
                          <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">IA</a>
                        </div>
                        <div className={cs([styles.button__2])}>
                          <div className={cs([styles.eff__2])}></div>
                          <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">UI/UX</a>
                        </div>
                        <div className={cs([styles.button__2])}>
                          <div className={cs([styles.eff__2])}></div>
                          <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">
                            eCommerce
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cs(['col-md-6', styles.p__lr__4])}>
                  <div className={cs([styles.work__project__info])}>
                    <a href="https://www.unifiedinfotech.net/portfolio/sofy/">
                      <div
                        className={cs([
                          styles.work__project__img,
                          mobileStyles.uipl__section__reveal__check,
                          mobileStyles.reveal__me,
                        ])}>
                        <img
                          className={cs([styles.blur__out])}
                          src="https://www.unifiedinfotech.net/assets/images/largo@1x.jpg"
                          alt="startup consulting services"
                        />
                      </div>
                    </a>
                    <div className={cs([styles.work__project__text, styles.pb__sm])}>
                      <a href="https://www.unifiedinfotech.net/portfolio/sofy/">
                        <img
                          className={cs([styles.project__title])}
                          src="https://www.unifiedinfotech.net/assets/images/largo-title.svg"
                          alt="startup consulting services"
                        />
                      </a>
                      <div className={cs([styles.project__text__desc])}>
                        <h3>
                          Creating an Artificial Intelligence powered award winning streaming app
                          featuring world’s best short films{' '}
                        </h3>
                      </div>
                      <div className={cs([styles.btn__link__wrap])}>
                        <div className={cs([styles.button__2])}>
                          <div className={cs([styles.eff__2])}></div>
                          <a href="https://www.unifiedinfotech.net/portfolio/sofy/">UI/UX</a>
                        </div>
                        <div className={cs([styles.button__2])}>
                          <div className={cs([styles.eff__2])}></div>
                          <a href="https://www.unifiedinfotech.net/portfolio/sofy/">
                            Mobile App Design
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cs([styles.load__btn, styles.discover__more])}>
                <div className={cs([styles.eff__3, styles.discover__eff])}></div>
                <a className={styles.text__white} href="https://www.unifiedinfotech.net/portfolio/">
                  discover more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={cs([mobileStyles.mobile__app__sec__7, mobileStyles.tab__slide__sec, 'pb-0'])}>
        <div className={cs(['container-fluid', 'p-0'])}>
          <div className={cs(['row', 'm-0'])}>
            <div className={cs(['col-sm-12', 'p-0'])}>
              <div className={cs([mobileStyles.tab__slide__wrap, mobileStyles.mobile__app__tab])}>
                <div className={cs([mobileStyles.cta__wrap])}>
                  <a
                    className={cs([styles.button__4, mobileStyles.button__4])}
                    href="https://www.unifiedinfotech.net/about/contact/">
                    <div className={cs([styles.eff__4])}></div>
                    <span>get in touch</span>
                  </a>
                </div>
                <h2 className={cs(['h3', mobileStyles.h3])}>Best practices that we follow</h2>
                {practicesWeFollow.map(({ id, title, imgSrc, subHeader, para }, index) => (
                  <div key={index}>
                    <h3
                      className={cs([
                        styles.h4,
                        mobileStyles.h4,
                        { [mobileStyles.active]: collapsible.activeId == id },
                      ])}
                      onClick={() => {
                        handleCollapse(id);
                      }}>
                      {title}
                    </h3>
                    <div
                      className={cs([
                        mobileStyles.tab__right__side,
                        { [mobileStyles.active]: collapsible.activeId == id },
                        mobileStyles.noafter,
                      ])}>
                      <div className={cs([mobileStyles.media])}>
                        <div className={cs([mobileStyles.tab__m__img])}>
                          <img src={imgSrc} alt="planning to build anapp" />
                        </div>
                        <div className={cs([mobileStyles.media__body])}>
                          <h5 className={cs(['mt-0'])}>{subHeader}</h5>
                          <p>{para}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cs(styles.consulting__start__8, styles.mobile__app__sec__9)}>
        <div className={'container'}>
          <div className={cs([styles.common__text, styles.text__black, 'text-center'])}>
            <h3 className={cs(['h2', styles.treat__as__h1, 'mb-0'])}>Testimonials</h3>
          </div>
          <Carousel
            swipeable
            infiniteLoop
            showThumbs={false}
            autoPlay={isMedium}
            showStatus={false}
            showArrows={false}>
            {praiseListAppDev.map(({ name, title, quote }, index) => (
              <div key={index} style={{ padding: '5%' }}>
                <section className={styles.praise}>
                  <div className={styles.praise__left}>
                    <FaQuoteLeft size={48} color="#C7C7C7" />
                  </div>
                  <div className={styles.praise__right}>
                    <div className={cs(styles.praise__quote, 'text-left')}>
                      <blockquote></blockquote>
                      <span className={'text-left'}>{quote}</span>
                    </div>
                    <div className={cs(styles.praise__name, 'text-left')}>{name}</div>
                    <div className={cs(styles.praise__title, 'text-left')}>{title}</div>
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
