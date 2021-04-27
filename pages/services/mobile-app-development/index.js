import cs from 'classnames';
import Head from 'next/head';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillCheckSquare } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { useResizeDetector } from 'react-resize-detector';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../../../components/button';
import Layout from '../../../components/layout';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from '../startup-consulting/startup-consulting.module.css';
import mobileStyles from './mobile-app.module.css';
import 'swiper/swiper-bundle.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
    praiseListAppDev, whatWeDevelop, swiperAppImage, practicesWeFollow,
  } from '../../../assets/data';
import { useEffect, useState } from 'react';


SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function MobileDevelopment() {
  const { width, ref } = useResizeDetector();



  const isSmall = width < 575;
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

  const consult_add = [
        {
            'title':'Product discovery',
            'description':'Initial research to get to the crux of your product concept with an expert cross-functional team, considering the user and business needs using a framework.',
        },
        {
            'title':'Market validation',
            'description':'Collaboratively develop questionnaires to test and validate assumptions of your end users. Interesting insights should lay the foundation of your product vision.',
        },
        {
            'title':'Documentation and roadmap',
            'description':'Our experts jot down the feature list, project roadmap with detailed milestone and sprint planning. This brings everyone involved in the project to a consensus.',
        }
  ]

  return (
    <Layout darkHeader>
      <Head>
        <title>Startup Consulting</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
        <section className={cs([styles.banner__sec__text, styles.consulting__banner__sec, styles.common__hero__text__wrap])}>
            <div className={cs("container-fluid p-0")}>
                <div className={cs("row justify-content-start")}>
                    <div className={cs("col-sm-11 col-md-10 col-lg-9 col-xl-8")}>
                        <div className={cs(styles.others__banner__text)}>
                            <p className={cs(styles.new__page__subtitle)}>ENTERPRISE CONSULTING</p>
                            <h1 className={cs(styles.new__page__title)}><span>Choose the right solutions for the accelerated growth of your business with the guidance of our experienced team for enterprise technology consultation services.</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div id="StartUp" className={cs(styles.consulting__start__add1)}>
            <div className={cs(styles.consulting__banner)}>
                <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/mobile-app-banner@1x.jpg" alt="startup consulting services"/>
            </div>
        </div>
        <section class={cs(["mobile-app-sec-2"])}>
            <div class={cs(['container-fluid', 'p-0'])}>
                <div class={cs(['row', 'm-0'])}>
                    <div class={cs(['col-md-6', 'p-0'])}>
                        <div class={cs([mobileStyles.app__message__info])}>
                            <div class={cs([styles.common__text, styles.text__black])}>
                                <h2 class={cs([styles.h3, 'mb-3'])}>A leading name in mobile app development in India &amp; USA</h2>
                                <p>When users are exposed to hundreds of apps- yours, need to be strikingly distinctive. Hence Unified Infotech will act as an end-to-end software development partner, serving as a catalyst to your success. We take pride in delivering human-centric experiences for your mobile app that are valuable and meaningful to your end-users through a combination of smart consultation, game-changing strategies, sterling <a class={cs([styles.text__black, styles.text__underline])} href="https://www.unifiedinfotech.net/services/ui-ux-design/">UI/UX design services</a>, and the latest technologies. Our mobile app developer team can help you create an impactful mobile app that reflects your brand and sets your stage within a short time frame.</p>
                            </div>
                        </div>
                    </div>
                    <div class={cs(['col-md-4', 'align-self-center', 'p-0'])}>
                        <div class={cs([mobileStyles.mobility__right])}>
                            <div class={cs([mobileStyles.item__right__top])}>
                                <div class={cs([mobileStyles.item__box__top])}></div>
                            </div>
                            <div class={cs([mobileStyles.item__right__down])}>
                               <div class={cs([mobileStyles.item__box__down])}></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section className={cs([mobileStyles.mobile__app__sec__6,'aos-init', 'aos-animate'])} data-aos="fade-up">
                <div className={cs(['container-fluid','p-0'])}>
                        <div className={cs(['row', 'm-0', 'justify-content-center'])}>
                             <div className={cs(["col-12"])}>
                                 <div className={cs([styles.common__text, styles.text__black, 'text-center'])}>
                                     <h2 className={cs([styles.h3, 'mb-5'])}>What We Develop &amp; Deliver</h2>
                                 </div>
                             </div>
                             {whatWeDevelop.map(({ title, maintext, link, icon }, index) => ( <div className={cs(['col-12', 'col-sm-6', 'col-md-6', 'col-lg-6', 'col-xl-3', mobileStyles.align__end, mobileStyles.border__end, mobileStyles.pad__box])}>
                                 <a href={link}>
                                 <div className={cs([mobileStyles.card__box, mobileStyles.box__container, mobileStyles.box__dark, mobileStyles.on__hover__show__content])}>
                                     <div className={cs([mobileStyles.box__top, styles.common__text])}>
                                         <h2>{title}</h2>
                                     </div>
                                     <div className={cs([mobileStyles.box__bottom])}>
                                         <div className={cs([mobileStyles.icon])}>
                                            {icon}
                                         </div>
                                     </div>
                                     <div className={cs([mobileStyles.card__box__footer])}>
                                         <div className={cs([mobileStyles.info])}>
                                            <p className={cs([mobileStyles.hover__text])}>{maintext}</p>
                                         </div>
                                     </div>
                                     <div className={cs([mobileStyles.card__blur])}></div>
                                 </div>
                                 </a>
                             </div>))}
                        </div>
                     </div>
        </section>
        <section className={cs(styles.consulting__start__3)}>
            <div className={cs('container-fluid', 'p-0')}>
                <div className={cs(['row', 'justify-content-center', 'flex-row-reverse', 'm-0'])}>       
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-5', 'pr-10'])}>
                        <div className={cs(styles.message__text__wrap)}>
                            <div className={cs([styles.text__message__info, styles.common__text, styles.text__black])}>
                                <h2 className={cs("h3")}>Get out to test your assumptions</h2>
                                <p>It is the potential buyers of your product to start with for lean market validation. As one of the trusted startup consulting firms, we know the struggles of startups. Hence we recommend after you pen down your assumption list, reach out to a sample of your potential audience to check if they resonate. A few well-phrased questions can yield interesting customer insights</p>
                            </div>
                        </div>
                    </div>
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-7', 'p-0'])}>
                        <div className={cs([styles.consulting__img, styles.consulting__start__img2, styles.uipl__section__reveal__check, styles.reveal__me])}>
                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/assumptions@1x.jpg" alt="startup consulting services"/>
                        </div>  
                    </div>  
                </div>
            </div>  
        </section>
        <div className={cs([styles.consulting__start__add3, styles.black__bg__info])}>
            <div className={cs("container")}>  
                <div className={cs("row")}>         
                    <div className={cs(['col-sm-12', 'col-md-8', 'col-xl-8', 'align-self-center', 'padd-all-0'])}>
                        <div className={cs(styles.start__up__text, styles.text__white)}>
                            <p>Unveil potential business threats and reduce long-term losses with Unified Infotech’s expert technology consultation</p>
                        </div>
                    </div>
                    <div className={cs(['col-sm-12', 'col-md-4', 'col-xl-4', 'align-self-center'])}>
                        <div className={cs([styles.button__4, styles.consulting__touch])}>
                            <div className={cs(styles.eff__4)}></div>
                            <a className={styles.text__white} href="https://www.unifiedinfotech.net/about/contact/">Get in Touch</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <section className={cs([styles.consulting__start__4, styles.consulting__bg__info])}>
            <div className={cs(['container-fluid', 'p-0'])}>
                <div className={cs([styles.common__padd__wrap, 'pt-0'])}>    
                    <div className={cs(['row', 'justify-content-end', 'm-0'])}>
                        <div className={cs(['col-md-12', 'col-lg-5', 'col-xl-4', 'align-self-center', 'p-0'])}>
                            <div className={cs([styles.common__padd__left, styles.consulting__margin, styles.black__bg__info])}>
                                <div className={cs([styles.common__text, styles.text__white])}>
                                    <h2 className={cs("h3")}>Find the value proposition</h2>
                                    <p>We help you craft a compelling value proposition being one of the most important steps in developing your product and business. We include this step in our small business consulting services. In essence, your value proposition should always:</p>
                                </div>    
                                <ul className={cs(styles.text__white)}>
                                    <li><span>explain the problem your product solves or the value it offers.</span></li>
                                    <li><span>directly speak to your customer</span></li>
                                    <li><span>pass the “so what” test answering why your customer should care for your product</span></li>
                                </ul>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={cs(styles.consulting__start__5)}>
            <div className={cs(['container-fluid', 'p-0'])}>
                <div className={cs(['row', 'justify-content-center', 'm-0'])}>        
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-5', 'pr-10'])}>
                        <div className={cs([styles.message__text__wrap, 'ui-ux-7', 'aos-init', 'aos-animate'])}>
                            <div className={cs([styles.text__message__info, styles.common__text, styles.text__black])}>
                                <h2 className={cs(styles.h3)}>Translate your value proposition to the product roadmap</h2>
                                <p>A roadmap is a strategic-level blueprint for converting your value proposition into a product. Think about your roadmap and milestones, not just in terms of feature list but from customer value stand-point. A few minutes of research based on the data gathered on your target audiences’ persona help you prioritize features and fixes.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-7', 'p-0'])}>
                        <div className={cs([styles.consulting__img, styles.uipl__section__reveal__check, styles.reveal__me])}>
                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/translate@1x.jpg" alt="startup consulting services"/>
                        </div>  
                    </div> 
                </div>
            </div>  
        </section>
        <section className={cs([mobileStyles.mobile__app__sec__3, styles.black__bg__info])}>
                <div className={cs(["container"])}>
                  <div className={cs(['row', 'justify-content-left'])}>         
                      <div className={cs(['col-sm-12', 'col-md-10', 'col-lg-8', 'col-xl-7'])}>
                          <div className={cs([styles.message__text__wrap])}>
                              <div className={cs([styles.text__message__info, styles.common__text, styles.text__white])}>
                                  <h2 className={cs([styles.h3])}>How we plan to develop your app</h2>
                                  <p>When our peers overlook the pre-planning, we never fail to do the basics right. We ask the right questions to our stakeholders that centers around their target audience. This discussion helps our developers in laying down the appropriate blueprint from the system’s perspective. Hence we make the development right. Together, as a reliable mobile app development company, we’ll identify which functionalities hold the most water before development to safeguard the chances for your app’s success.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                 </div>
                 <div className={cs([mobileStyles.wirefram__img__wrap])}>
                    <div className={cs(["row"])}>
                        <div className={cs(["col-sm-12"])}>
                                <div className={cs([styles.design__box])}>
                                        <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/high-fidelity-wireframe@1x.png" alt="high fidelity wireframe"/>
                                </div>  
                        </div>
                    </div>
                 </div>
                 <div className={cs([mobileStyles.wirefram__mobileimg__wrap, 'overflow-hidden'])}>
                    <div className={cs([mobileStyles.swiper__container])}>
                        <div className={cs([mobileStyles.swiper__wrapper])}>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/Personalisation_05@1x.png" alt="Personalisation"/>
                            </div>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])}  src="https://www.unifiedinfotech.net/assets/images/Main-Home@1x.png" alt="Main Home"/>
                            </div>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])}  src="https://www.unifiedinfotech.net/assets/images/Payment-for-Subscription@1x.png" alt="Payment for Subscription"/>
                            </div>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/Personalisation@1x.png" alt="application testing"/>
                            </div>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/Personalisation_01@1x.png" alt="mobile app interface"/>
                            </div>
                            <div className={cs([mobileStyles.swiper__slide])}>
                                    <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/Write_a_review@1x.png" alt="write a reviews"/>
                            </div>
                        </div>
                    </div>
                    <div className={cs("swiper-scrollbar")}></div>      
                </div>   
        </section>
        <section className={cs(['mobile-app-sec-4'])}>
                <div className={cs(["container"])}>
                  <div className={cs(['row', 'flex__row__reverse', 'justify-content-center'])}>         
                      <div className={cs(['col-sm-12', 'col-md-6'])}>
                          <div className={cs([styles.design__box, styles.uipl__section__reveal__check, styles.reveal__me])}>
                                  <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/testing@1x.jpg" alt="testing"/>
                          </div>  
                      </div>
                      <div className={cs(['col-sm-12', 'col-md-6'])}>
                          <div className={cs([styles.message__text__wrap, 'aos-init', 'aos-animate'])} data-aos="fade-up">
                              <div className={cs([styles.text__message__info, styles.common__text, styles.text__black])}>
                                  <h2 className={cs([styles.h3])}>The way we design to engage users</h2>
                                  <p>As it gets tougher for design thinkers and developers to get users to find and download apps, you ‘have’ to think about engagement; in order to make your mobile app design relevant, valued and useful so it delights and hence retains user. Time and again, we put ourselves in the end-users shoes to empathize and feel the experience, be it iOS apps or Android application. From content curation, pixel-perfection to intuitive micro-interactions, we leave no stone unturned to build an app that engages.</p>
                                  <h5>From ideation to visual manifestation,</h5>
                                  <a className={cs([styles.button__4])} href="https://www.unifiedinfotech.net/how-we-work/">
                                        <div className={cs([styles.eff__4])}></div>
                                        <span>The Way We Do It</span>
                                  </a>
                               </div>
                          </div>
                      </div>
                  </div>
                 </div>   
        </section>
        <section className={cs(styles.consulting__start__add)}>
            <div className={cs("container")}>
                <div className={cs("row")}>
                    <div className={cs("col-sm-12")}>
                        <div className={cs(styles.message__text__wrap)}>
                            <div className={cs([styles.text__message__info, styles.common__text, styles.text__black])}>
                                <h2 className={cs("h3")}>What we do and what we offer</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cs(['row', 'justify-content-center'])}>
                {consult_add.map(({title, description})=>(
                    <div className={cs(['col-12', 'col-sm-12', 'col-md-4', 'col-lg-4', 'r-p-0'])}>
                        <div className={cs([styles.web__app__box, styles.box__gray, 'aos-init', 'aos-animate'])}>
                                        <div className={cs([styles.box__top, styles.common__text, styles.text__black])}>
                            <h3 className={cs("h2")}>{title}</h3>
                                        </div>
                                    
                                    <div className={cs([styles.box__bottom, styles.common__text, styles.text__black])}>
                            <p>{description}</p>
                                    </div>
                        </div>
                    </div>))}
                </div>         
            </div>
        </section>
        <section className={cs([mobileStyles.mobile__app__sec__5, styles.black__bg__info])}>
                <div className={cs(['container-fluid', 'p-0'])}>
                  <div className={cs(['row', 'm-0', 'justify-content-left'])}>         
                      <div className={cs(['col-sm-12', 'col-md-12', 'col-lg-4', 'col-xl-5', 'p-0'])}>
                          <div className={cs([styles.message__text__wrap, 'aos-init', 'aos-animate', mobileStyles.message__text__wrap])} data-aos="fade-up">
                              <div className={cs([styles.text__message__info, styles.common__text, styles.text__white])}>
                                  <h2 className={cs([styles.h3])}>Developing your app to perform</h2>
                                  <p>Performance- one of the biggest predictors of app success - we take it damn seriously. To ensure your idea doesn’t turn into a horror story, we foolproof our mobile app development process. By reducing the app’s response lag, eliminating data redundancy, optimizing memory allocation and implementing high-end data encryption- the result you get is a stunning mobile app experience. And it is evident from the raking user base in App Store as well as Google Play Store for our clients, especially as leading <a className={cs(["text-underline text-white"])} href="https://www.unifiedinfotech.net/services/mobile-app-development-new-york/">app developers New York</a> and beyond.</p>
                              </div>
                          </div>
                      </div>
                      <div className={cs(['col-sm-12', 'col-md-12', 'col-lg-8', 'col-xl-7', 'p-0'])}>
                            <div className={cs([mobileStyles.frem__slider__wrap, 'frem-slider-wrap'])}>
                                    <div className={cs([mobileStyles.inmobileshowcase])}>
                                            <div className={cs([mobileStyles.mobile__showcase])}></div>
                                            <Swiper
                                                loop
                                                autoPlay ={{
                                                    delay: 2000,
                                                }}
                                                navigation
                                                spaceBetween={32}
                                                slidesPerView={isSmall ? 1 : isMedium ? 3 : 1}
                                                >
                                                {swiperAppImage.map(({ id, url }) => (
                                                    <SwiperSlide key={id}>
                                                    <div className={cs([mobileStyles.swipe__inn])}>
                                                        <img className={cs([styles.blur__out, mobileStyles.swipe__inn__img])} src={url} alt="favourite more movie receipts"/>        
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

        <section className={cs([mobileStyles.mobile__app__sec__7, mobileStyles.tab__slide__sec, 'pb-0'])}>
            <div className={cs(['container-fluid', 'p-0'])}>
                <div className={cs(['row', 'm-0'])}>
                    <div className={cs(['col-sm-12', 'p-0'])}>
                        <div className={cs([mobileStyles.tab__slide__wrap, mobileStyles.mobile__app__tab])}>
                            <div className={cs([mobileStyles.cta__wrap])}>
                                <a className={cs([styles.button__4])} href="https://www.unifiedinfotech.net/about/contact/">
                                        <div className={cs([styles.eff__4])}></div>
                                        <span>get in touch</span>
                                </a>
                            </div>  
                        <h2 className={cs(["h3", mobileStyles.h3])}>Best practices that we follow</h2>       
                        {practicesWeFollow.map(({ id, title, imgSrc, subHeader, para }, index) => (
                            <div key={id}>
                            <h3 className={cs([styles.h4, mobileStyles.h4])}>{title}</h3>
                            <div className={cs([mobileStyles.tab__right__side])}>
                                    <div className={cs([mobileStyles.media])}>
                                        <div className={cs([mobileStyles.tab__m__img])}>
                                            <img src={imgSrc} alt="planning to build anapp"/>
                                        </div>    
                                            <div className={cs([mobileStyles.media__body])}>
                                            <h5 className={cs(["mt-0"])}>{subHeader}</h5>
                                            <p>{para}</p>
                                            </div>
                                    </div>
                            </div></div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>    
        </section>
        <section className={cs(styles.consulting__start__8, styles.mobile__app__sec__9)}>
            <div className={'container'}>
                <div className={cs([styles.common__text, styles.text__black, 'text-center'])}>
                    <h3 className={cs(["h2", styles.treat__as__h1, 'mb-0'])}>Testimonials</h3>
                </div>
                <Carousel
                    swipeable
                    infiniteLoop
                    showThumbs={false}
                    autoPlay={isMedium}
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                >
                    {praiseListAppDev.map(({ name, title, quote }, index) => (
                    <div key={index} style={{ padding: '5%' }}>
                        <section className={styles.praise}>
                        <div className={cs(styles.praise__quote, 'text-left')}>
                            <FaQuoteLeft size={33} color="#C7C7C7" />
                            <blockquote>
                            </blockquote>
                            <span className={'text-left'}>{quote}</span>
                        </div>
                        <div className={cs(styles.praise__name, 'text-left')}>{name}</div>
                        <div className={cs(styles.praise__title, 'text-left')}>{title}</div>
                        </section>
                    </div>
                    ))}
                </Carousel>
            </div>
        </section>
    </Layout>
  );
}