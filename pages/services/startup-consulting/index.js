import cs from 'classnames';
import Head from 'next/head';
import { BsPlayFill } from 'react-icons/bs';
import { AiFillCheckSquare } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { useResizeDetector } from 'react-resize-detector';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

import Button from '../../../components/button';
import Layout from '../../../components/layout';
import { FaQuoteLeft } from 'react-icons/fa';
import styles from './startup-consulting.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import {
    praiseListStartup,
  } from '../../../assets/data';
import { useEffect, useState } from 'react';

export default function StartupConsulting() {
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
                            <p className={cs(styles.new__page__subtitle)}>START UP CONSULTING</p>
                            <h1 className={cs(styles.new__page__title)}><span>Accelerate your business growth with the help of our guidance: choose our startup consulting services to let your business grow bigger</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className={cs([styles.consulting__sec__1, styles.consulting__start__1])}>
            <div className={cs("container")}>
                <div className={cs("row")}>
                    <div className={cs(['col-6', 'col-sm-6', 'col-md-6', styles.p__r__1])}>
                        <div className={cs([styles.consulting__radio__wrap, styles.light__gray__bg__info])}>
                            <a href={"/services/enterprises/#Enterprise"}>
                                <div className={cs(styles.square__radio)}>
                                    <div className={cs("label", styles.label)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2" d="M1 1h18v18H1z"></path>
                                        </svg>
                                        <span>I need a refined IT strategy and consultation for my company.</span>
                                    </div>
                                </div>
                                <div className={(styles.consulting__text)}>
                                    <h5>Enterprise</h5>
                                </div>
                            </a>    
                        </div>    
                    </div>

                    <div className={cs(['col-6', 'col-sm-6', 'col-md-6', styles.p__l__1])}>
                        <div className={cs([styles.consulting__radio__wrap, styles.light__gray__bg__info, styles.active__black])}>
                            <a href={"/services/startup-consulting/#StartUp"}>
                                <div className={cs(styles.square__radio)}>
                                    <div className={cs("label", styles.label)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <g fill="none" fillRule="evenodd">
                                                <path fill="#FFF" d="M-244-527h1366v7787H-244z"></path>
                                                <path fill="#000" stroke="#000" d="M-34.5-63.5h473v322h-473z"></path>
                                                <path fill="#FFF" stroke="#FFF" d="M.5.5h19v19H.5z"></path>
                                                <path stroke="#000" stroke-width="3" d="M3 10.16L7.566 15 17 5"></path>
                                            </g>
                                        </svg>                                                
                                        <span>I have a startup idea and need right consultation.</span>
                                    </div>
                                </div>
                                <div className={cs(styles.consulting__text)}>
                                    <h5>Start up</h5>
                                </div>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div id="StartUp" className={cs(styles.consulting__start__add1)}>
            <div className={cs(styles.consulting__banner)}>
                <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/banner-start-up@1x.jpg" alt="startup consulting services"/>
            </div>
        </div>
        <section className={cs(styles.consulting__start__add2)}>
            <div className={cs(['container-fluid', 'p-0'])}>  
                <div className={cs("row")}>         
                    <div className={cs(['col-sm-12', 'col-md-9', 'col-lg-6', 'col-xl-5', styles.col__xxl__4, styles.padd__all__0])}>
                        <div className={cs([styles.consulting__up__wrap, styles.black__bg__info])}>
                            <div className={cs([styles.common__text, styles.text__white])}>
                                <h4>Startup strategy to Kick off right</h4>
                                <p>We offer unique expertise that blends diverse entrepreneurial experience, practical solutions, and real business insights in our startup consulting services. We help you to identify the most critical next steps, help them get executed and advice for greater return on investment. Check out what’s in our startup consulting services in India and USA.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>  
        </section>
        <section className={cs(styles.consulting__start__2)}>
            <div className={cs(['container-fluid', 'p-0'])}>
                <div className={cs(['row', 'justify-content-center', 'm-0'])}>        
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-5', 'pr-10'])}>
                        <div className={cs([styles.message__text__wrap])}>
                            <div className={cs([styles.text__message__info, styles.common__text, styles.text__black])}>
                                <h2 className={cs("h3")}>Validate before you build</h2>
                                <p>We ask the big questions starting from who is your customer, what problems you are trying to solve, how does your product solve the market problem and what are the key features that might give you a headstart.</p>
                                <p>We encourage you to start with a business model canvas which is a one-page strategy consulting for startups describing the high-level strategic details of your product vision.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cs(['col-sm-12', 'col-lg-6', 'col-xl-7', 'p-0'])}>
                        <div className={cs([styles.consulting__img, styles.consulting__start__img1, styles.uipl__section__reveal__check, styles.reveal__me])}>
                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/validate-build@1x.jpg" alt="startup consulting services"/>
                        </div>  
                    </div> 
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
                                <h2 className={cs("h3")}>Translate your value proposition to the product roadmap</h2>
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
        <section className={cs([styles.consulting__start__6, styles.black__bg__info])}>
                <div className={cs(['container-fluid', styles.consulting__padd])}>
                <div className={cs(['row', 'justify-content-left'])}>         
                    <div className={cs(['col-sm-12', 'col-md-8', 'col-lg-7', 'col-xl-6'])}>
                        <div className={cs(styles.message__text__wrap)}>
                            <div className={cs([styles.text__message__info, styles.common__text, styles.text__white])}>
                                <h2 className={cs("h3")}>Planning and Documentation</h2>
                                <p>From a naive business idea on a scribble pad to a solid document articulating feature scoping, use cases and milestone definition, we lay out the scope of your project along with your collaboration. And this helps in making lesser mistakes in the journey. This makes clients trust us one of the leading startup consulting firms globally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cs("row")}>
                <div className={cs("col-sm-12")}>
                    <div className={cs(styles.consulting__planning__img)}>
                        <img class={styles.blur__out} src="https://www.unifiedinfotech.net/assets/images/ideation-doc@1x.jpg" alt="startup consulting services"/>
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
        <section className={cs([styles.mobile__app__sec__8, styles.consulting__start__7, styles.section__features])}>
            <div className={cs(['container-fluid', 'p-0'])}>
                <div className={cs(['row', 'm-0'])}>
                    <div className={cs(['col-6', 'p-0', styles.client_info_left, styles.white__bg__info])}>
                        <div className={cs([styles.client__info__text])}>
                            <h3 className={cs([styles.client__h1, styles.text__black__h1])}>Success</h3>
                        </div>
                    </div>
                    <div className={cs(['col-6', 'p-0', styles.client_info_right, styles.black__bg__info])}>
                        <div className={cs([styles.stories__info__text])}>
                            <h3 className={cs([styles.stories__h1, styles.text__white__h1])}>stories</h3>
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
                                        <div className={cs([styles.work__project__img, styles.uipl__section__reveal__check, styles.reveal__me])}>
                                            <img className={cs([styles.blur__out])} src="https://www.unifiedinfotech.net/assets/images/toonyport-ecommerce@1x.jpg" alt="startup consulting services"/>
                                        </div>
                                    </a>
                                    <div className={cs([styles.work__project__text])}>
                                        <img className={cs([styles.project__title])} src="https://www.unifiedinfotech.net/assets/images/toonyport-title.svg" alt="startup consulting services"/>
                                        <div className={cs([styles.project__text__desc])}>
                                            <h3>Co-created with this e-commerce startup to be the one stop solution for kids apparel and accessories, making shopping easy and time saving</h3>
                                        </div>
                                        <div className={cs([styles.btn__link__wrap])}>
                                            <div className={cs([styles.button__2])}>
                                                <div className={cs([styles.eff__2])}></div>
                                                <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">UX/UI</a>
                                            </div>
                                            <div className={cs([styles.button__2])}>
                                                <div className={cs([styles.eff__2])}></div>
                                                <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">Mobile App Development</a>
                                            </div>
                                            <div className={cs([styles.button__2])}>
                                                <div className={cs([styles.eff__2])}></div>
                                                <a href="https://www.unifiedinfotech.net/portfolio/toonyport/">eCommerce</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cs(['col-md-6', styles.p__lr__4])}>
                                <div className={cs([styles.work__project__info])}>
                                    <a href="https://www.unifiedinfotech.net/portfolio/sofy/">
                                        <div className={cs([styles.work__project__img, styles.uipl__section__reveal__check, styles.reveal__me])}>
                                            <img className={cs([styles.blur__out])}  src="https://www.unifiedinfotech.net/assets/images/largo@1x.jpg" alt="startup consulting services"/>
                                        </div>
                                    </a>
                                    <div className={cs([styles.work__project__text, styles.pb__sm])}>
                                    <a href="https://www.unifiedinfotech.net/portfolio/sofy/">
                                        <img className={cs([styles.project__title])} src="https://www.unifiedinfotech.net/assets/images/largo-title.svg" alt="startup consulting services"/>
                                    </a>
                                    <div className={cs([styles.project__text__desc])}>
                                        <h3>Creating an Artificial Intelligence powered award winning streaming app featuring world’s best short films </h3>
                                    </div>
                                    <div className={cs([styles.btn__link__wrap])}>
                                        <div className={cs([styles.button__2])}>
                                            <div className={cs([styles.eff__2])}></div>
                                            <a href="https://www.unifiedinfotech.net/portfolio/sofy/">UX/UI</a>
                                        </div>
                                        <div className={cs([styles.button__2])}>
                                            <div className={cs([styles.eff__2])}></div>
                                            <a href="https://www.unifiedinfotech.net/portfolio/sofy/">Mobile App Development</a>
                                        </div>
                                        <div className={cs([styles.button__2])}>
                                            <div className={cs([styles.eff__2])}></div>
                                            <a href="https://www.unifiedinfotech.net/portfolio/sofy/">RESTful API Development</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
            <div className={cs([styles.load__btn, styles.discover__more])}>
                <div className={cs([styles.eff__3, styles.discover__eff])}></div>
                <a className={styles.text__white} href="https://www.unifiedinfotech.net/portfolio/">discover more</a>
            </div>
            </div>
            </div>
            </div>
        </section>
        <section className={cs(styles.consulting__start__8, styles.mobile__app__sec__9)}>
            <div className={'container'}>
                <div className={cs([styles.common__text, styles.text__black, 'text-center'])}>
                    <h3 className={cs(["h2", styles.treat__as__h1, 'mb-0'])}>From people like you</h3>
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
                    {praiseListStartup.map(({ name, title, quote }, index) => (
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