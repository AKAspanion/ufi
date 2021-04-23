import cs from 'classnames';
import Head from 'next/head';
import { FaQuoteLeft } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import { useResizeDetector } from 'react-resize-detector';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import Button from '../../components/button';

import Layout from '../../components/layout';

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

const proces_steps = [
    {
        1: {
            commontext_h3: 'Let’s talk about the specifics',
            commontext_h4: 'Discovery Workshop',
            commontexSubHeader: 'Objective',
            bg__info: {
                bgInfoBlack:
                {
                    headerData: "Objectives",
                    classesRowChild: 'col-md-12 col-lg-7 align-self-center p-0',
                    objectives: [
                        'Run through the entire project with the client based on the initial proposal and agreement.',
                        'Establish a detailed idea about the goals and business objectives of the client.',
                        'Understanding the competitive landscape.',
                        'Understanding the target audience, market & geography',
                        'Clarifying all queries and doubts which the team has, post initial analysis.',
                        'Understanding and documenting client’s design and branding preferences',
                        'Laying down assumptions and constrains!',
                        'Coming with a high level epic mapping.'
                    ],
                },
                bgInfoWhite:
                {
                    uiplImage: 'https://www.unifiedinfotech.net/assets/images/discovery@4x.jpg',
                }
            }
        },
    }
];
const outCome = [
    {
        title: 'Outcome',
        list__data: [
            'Have a precise and clear idea about the client’s and project’s goals',
            'Getting client’s inputs and clarification on all open-ended points',
            'Have a clear idea about the likes and dislikes of the client.',
            'Having all the information required for the planning phase.',
        ]
    },
    {
        title: 'Team Members Involved',
        list__data: [
            'Project Manager',
            'Tech Lead',
            'IA & UX Lead',
            'Project Owner / Client',
            'Business Analyst',
        ]
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


const getSubSection = (obj) => {
    const { id, img, desc } = obj;
    const subdata = proces_steps.find(item => item.hasOwnProperty(id));
    if (!subdata)
        return;
    const subdataObj = subdata[Object.keys(subdata)[0]];


    if (id == 1) {
        const { commontext_h3, commontext_h4, bg__info, commontexSubHeader } = subdataObj;
        const { bgInfoBlack, bgInfoWhite } = bg__info;
        const { objectives } = bgInfoBlack;
        return (<>
            <div className={cs(styles.we__work__section, styles.discovery__workshop__sec)}>
                <div className={cs([styles.common_text, styles.text__black])}>
                    <h3 className={styles.commonh3}>{commontext_h3}</h3>
                    <h4 className={styles.commonh4}>{commontext_h4}</h4>
                </div>
                <div className={cs(styles.workshop_wrap, [styles.black__bg__info, styles.common__pad__wrap])}>
                    <div className={cs('row', 'm-0')}>
                        <div className={cs(['col-md-12', 'col-lg-7', 'p-0'])}>
                            <div className={cs(styles.common__pad__left, styles.black__sec__padd)}>
                                <div className={cs([styles.common_text, styles.text__white])}>
                                    <h5 className={styles.sub__header}>{commontexSubHeader}</h5>
                                </div>
                                <ul className={cs([styles.text__white, styles.ul__list])}>
                                    {objectives.map((desc) => {
                                        return <li>
                                            <span>{desc}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className={cs(['col-md-12', 'col-lg-5', styles.box__down, 'p-0', styles.mobile__white__bg])}>
                            <div className={cs([styles.discovery__workshop__right, styles.design__box, styles.uipl_section_reveal_check, styles.reveal_me])}>
                                <img alt="Unified Infotech process" src={bgInfoWhite.uiplImage} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cs(styles.workshop_wrap, [styles.white__bg__info, styles.common__padd__wrap])}>
                    <div className={cs('row', 'm-0')}>
                        {outCome.map(({ title, list__data }) => {
                            return (<>
                                <div className={cs(['col-sm-8', 'p-0'])}>
                                    <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                        <div className={cs([styles.common_text, styles.text__black])}>
                                            <h5 className={styles.sub__header}>{title}</h5>
                                        </div>
                                        <ul className={cs([styles.text__black, styles.ul__list])}>
                                            {list__data.map((desc) => {
                                                return <li>
                                                    <span>{desc}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </>)
                        })}
                    </div>
                </div>
            </div></>)
    }

}

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [selectedNav, setSelectedNav] = useState(0);
    const { width, ref } = useResizeDetector();
    const [collapsible, setcollapsible] = useState({ collapsible1: false, collapsible2: false });

    useScrollPosition(({ currPos }) => {
        console.log(parseInt(-1 * (scrollY / 100)));
        console.log(scrollY / 100);
        setScrollY(currPos.y);
    });
    const isSmall = width < 575;
    const isMedium = width < 980;
    const handleCollapse = (id) => {
        if (id == 1) {
            setcollapsible(prevState => ({
                ...prevState,
                collapsible1: !prevState.collapsible1,
            }));
        }
        if (id == 2) {
            setcollapsible(prevState => ({
                ...prevState,
                collapsible2: !prevState.collapsible2,
            }));
        }
    };

    return (
        <Layout darkHeader>
            <Head>
                <title>Website</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
                />
            </Head>
            <section className={styles.banner_section}>
                <div className={cs('container-fluid', 'p-0')}>
                    <div className={cs('row', 'm-0')}>
                        <div className={cs(['col-sm-11', 'col-md-10', 'col-lg-9', 'col-xl-7', 'p-0'])}>
                            <div className={cs(styles.other__banner_text)}>
                                <h1 className={styles.page__title}>
                                    <span>How we work</span>
                                </h1>
                                <p>
                                    The process is defined as a sequence of steps. When followed, it helps to achieve a goal. We consider it - the art of thinking through.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cs([styles.scroll__section, styles.scrool__wrap, styles.scroll__main__wrap])}>
                <div className={cs([styles.scroll__left, 'p-0', styles.work__mobile__heading])}>
                    <div className={cs(styles.common_text)}>
                        <h3>
                            Let’s talk about the specifics
                        </h3>
                    </div>
                    <nav className={cs([styles.sidebar, { [styles.fixed]: (-90 < scrollY / 100 && scrollY / 100 < -4) }, styles.cd__vertical__nav,])} >
                        <ul>
                            {processNav.map(({ id, name }) => (
                                <li
                                    key={id}
                                    onClick={() => setSelectedNav(id - 1)}
                                    className={cs({
                                        [styles.a]: parseInt((-1 * (scrollY / 1000)) - 3) == id
                                    })}
                                ><a href="" className={cs([styles.a_link, styles.a__li], {
                                    [styles.a__is__selected]: parseInt((-1 * (scrollY / 1000)) - 1) == id,
                                })}>
                                        <span>
                                            {`${id}. ${name}`}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className={cs(styles.header)}>
                            <div className={cs(styles.progress__container)}>
                                <div className={cs(styles.progress__bar)} id="myBar" style={{ 'height': `${(-1 * (scrollY / 100) + 10)}%` }}></div>
                            </div>
                        </div>
                    </nav>
                    <nav className={cs([styles.sidebar, styles.mobile__progressbar])} id="cd-vertical-nav-mobile">
                        <ul>
                            <li>
                                <a href="#section1" className={cs("is-selected")} data-number="1">
                                    <span className={cs('cd-label')}>1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#section2" data-number="2">
                                    <span className={cs('cd-label')}>2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#section3" data-number="3">
                                    <span className={cs('cd-label')}>3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#section4" data-number="4">
                                    <span className={cs('cd-label')}>4</span>
                                </a>
                            </li>
                            <li>
                                <a href="#section5" data-number="5">
                                    <span className={cs("cd-label")}>5</span>
                                </a>
                            </li>
                            <li>
                                <a href="#section6" data-number="6">
                                    <span className={cs("cd-label")}>6</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cs([styles.scroll__right, 'p-0', styles.right__side__content])}>
                    {process.map((obj) => (
                        obj.id == 1 && <div key={obj.id}>
                            <section className={cs([styles.common__work__sec, styles.section1, styles.discovery__workshop__sec])} key={`section${obj.id}`} id="section1">

                                {getSubSection(obj)}
                            </section>
                        </div>


                    ))}
                    <div key='2'>
                        <section className={cs([styles.standout, styles.planning__sec])} key={`section2`}>
                            <div className={cs([styles.common_text, styles.text__black, styles.planning__mobile])}>
                                <h4 className={styles.commonh4}>Planning</h4>
                            </div>
                            <div className={styles.planning__bg}>
                                <div className={styles.we__work__section}>
                                    <div className={styles.common__pad__wrap, styles.common__padd__wrap}>
                                        <div className={cs('row', 'm-0')}>
                                            <div className={cs('col-sm-12', 'col-lg-8', 'col-xl-7', styles.black__bg__info, styles.box__down, 'p-0')}>
                                                <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                                    <div className={cs([styles.common__text__section, styles.text__white, styles.common_text])}>
                                                        < h5 className={styles.sub__header}> Objective</h5>
                                                    </div>
                                                    <ul className={cs([styles.text__white, styles.ul__list, styles.box__down])}>
                                                        <li><span>Creation of all relevant documentation required for successful execution of the project</span></li>
                                                        <li><span>Getting confirmation and approval from the client on the documents and materials</span></li>
                                                        <li><span>Defining the project plan</span></li>
                                                        <li><span>Defining the design and branding guidelines of the project</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cs(styles.we__work__section, styles.padt__5)}>
                                <div className={cs([styles.common__pad__wrap, styles.white__bg__info, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, 'pt-0', styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5 className={styles.sub__header}>Outcome</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.ul__list])}>

                                                    <li><span>To get everything documented in detail, leaving nothing for chance or assumption</span></li>
                                                    <li><span>To get client’s approval and signoff on the documentation and project plan</span></li>
                                                    <li><span>To have a well-defined and precise planning of the project </span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5 className={styles.sub__header}>Deliverables</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.ul__list])}>
                                                    <li><span>Detailed technical Specification</span></li>
                                                    <li><span>Wire-frames</span></li>
                                                    <li><span>User Stories</span></li>
                                                    <li><span>Project plan with detailed milestone/sprint planning</span></li>
                                                    <li><span>Test cases and scenarios</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, 'pb-0', styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5 className={styles.sub__header}>Team Members Involved</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.ul__list])}>
                                                    <li><span>Project Manager</span></li>
                                                    <li><span>Tech Lead</span></li>
                                                    <li><span>IA &amp; UX Lead</span></li>
                                                    <li><span>UI Design Lead</span></li>
                                                    <li><span>Test Lead</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </section>
                    </div>
                    <div key='3'>
                        <section className={cs([styles.common__work__sec, styles.design__sec])} key={`section3`}>
                            <div className={cs(['common__text__section', styles.text__black, styles.design__mobile, styles.common_text])}>
                                <h4 className={styles.commonh4}>Design</h4>
                            </div>
                            <div className={styles.we__work__section}>
                                <div className={cs([styles.design__sec__wrap, styles.white__bg__info])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs('col-sm-12', 'p-0')} >
                                            <div className={cs([styles.discovery_workshop_right, styles.design__box, styles.uipl_section_reveal_check, styles.reveal_me])}>
                                                <img className={cs([styles.blur__out, styles.design__box_img])} src="https://www.unifiedinfotech.net/assets/images/design@2x.jpg" alt="Unified Infotech process" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cs([styles.common__pad__wrap, styles.white__bg__info, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, 'pt-0', styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Objective</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>UI Design of all the project screens based on the approved wire-frames and design guidelines</span></li>
                                                    <li><span>Web, Tablet and Mobile specific designs.</span></li>
                                                    <li><span>Getting system UI Designs approved and confirmed by the client.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, 'pt-0', styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Deliverables</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>UI Designs of the projects</span></li>
                                                    <li><span>Clickable prototype on Invision platform -&gt; <a style={{ position: "relative", zIndex: "3" }} className={styles.a_link} href="https://projects.invisionapp.com/share/95OUQVFHSJY#/screens/328514871" target="_blank">example link</a></span></li>
                                                    <li><span>Source files in either Photoshop or Sketch format</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs('col-sm-12', 'col-lg-8', 'col-xl-7', styles.box__down, 'p-0')}>
                                            <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Tools</h5>
                                                </div>
                                                <div className={cs('row', 'm-0')} >
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#001D26" d="M1.5 1.5h33v32.1h-33z"></path>
                                                                <path fill="#00C8FF" d="M0 0v35.1h36V0H0zm1.5 1.5h33v32.1h-33V1.5zm7.2 6.72c0-.105.21-.18.33-.18a89.61 89.61 0 0 1 3.87-.075c4.155 0 5.775 2.28 5.775 5.205 0 3.81-2.76 5.445-6.15 5.445-.57 0-.765-.03-1.17-.03v5.76c0 .12-.045.18-.18.18H8.88c-.12 0-.18-.045-.18-.18V8.22zm2.67 7.965c.345.03.615.03 1.215.03 1.755 0 3.405-.615 3.405-3 0-1.905-1.185-2.865-3.18-2.865-.6 0-1.17.03-1.44.045v5.79zm12.9-1.785c-1.185 0-1.59.6-1.59 1.095 0 .54.27.915 1.86 1.74 2.355 1.14 3.09 2.235 3.09 3.84 0 2.4-1.83 3.69-4.305 3.69-1.305 0-2.43-.27-3.075-.645-.105-.045-.12-.12-.12-.24v-2.205c0-.15.075-.195.18-.12a5.568 5.568 0 0 0 3.015.885c1.185 0 1.68-.495 1.68-1.17 0-.54-.345-1.02-1.86-1.8-2.13-1.02-3.015-2.055-3.015-3.78 0-1.935 1.515-3.54 4.14-3.54 1.29 0 2.19.195 2.685.42.12.075.15.195.15.3v2.055c0 .12-.075.195-.225.15-.66-.42-1.635-.675-2.61-.675z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#261300" d="M1.7 1.5h33v32.1h-33z"></path>
                                                                <path fill="#FF7C00" d="M.2 0v35.1h36V0H.2zm1.5 1.5h33v32.1h-33V1.5z"></path>
                                                                <path fill="#FF7C00" d="M12.695 19.875l-1.185 4.5c-.03.12-.075.15-.225.15H9.08c-.15 0-.18-.045-.15-.225l4.26-14.91c.075-.27.12-.51.15-1.245 0-.105.045-.15.12-.15h3.15c.105 0 .15.03.18.15l4.77 16.185c.03.12 0 .195-.12.195h-2.49c-.12 0-.195-.03-.225-.135l-1.245-4.515h-4.785zm4.17-2.43c-.42-1.665-1.41-5.295-1.785-7.05h-.03c-.315 1.755-1.11 4.725-1.74 7.05h3.555zm6.75-8.34c0-.96.675-1.53 1.53-1.53.915 0 1.53.615 1.53 1.53 0 .99-.645 1.53-1.56 1.53-.87 0-1.5-.54-1.5-1.53zm.18 3.405c0-.12.045-.18.18-.18h2.355c.12 0 .18.045.18.18v11.835c0 .12-.03.18-.18.18h-2.325c-.15 0-.195-.075-.195-.195V12.51h-.015z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#2E001E" d="M1.9 1.5h33v32.1h-33z"></path>
                                                                <path fill="#FF2BC2" d="M.4 0v35.1h36V0H.4zm1.5 1.5h33v32.1h-33V1.5z"></path>
                                                                <path fill="#FF2BC2" d="M26.545 14.745c-.225-.105-.51-.15-.87-.15-1.89 0-3.15 1.455-3.15 3.87 0 2.76 1.29 3.87 2.97 3.87.36 0 .75-.045 1.035-.165v-7.425h.015zm-6.72 3.84c0-3.495 2.25-6.225 5.94-6.225.315 0 .48 0 .78.03v-3.9c0-.09.075-.15.15-.15h2.415c.12 0 .15.045.15.12v13.71c0 .405 0 .915.075 1.47 0 .105 0 .12-.09.165-1.26.6-2.58.87-3.84.87-3.255 0-5.58-2.01-5.58-6.09zm-5.115-2.43l4.2 8.145c.075.12.03.24-.09.24h-2.61c-.165 0-.24-.045-.315-.195-.96-1.98-1.935-4.035-2.94-6.165h-.03c-.9 2.01-1.89 4.2-2.85 6.18-.075.12-.15.165-.27.165h-2.49c-.15 0-.165-.12-.09-.21l4.11-7.905L7.36 8.55c-.09-.12 0-.225.105-.225h2.58c.15 0 .225.03.27.165.945 1.995 1.905 3.96 2.805 5.97h.03c.87-1.98 1.83-3.975 2.745-5.94.075-.12.12-.195.27-.195h2.415c.12 0 .165.09.09.225l-3.96 7.605z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="33" viewBox="0 0 37 33">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#EA6C00" d="M7.914 11.71l10.648 20.842L.664 11.71zM29.214 11.71L18.566 32.552 36.464 11.71z"></path>
                                                                <path fill="#FDAD00" d="M7.914 11.71H29.21L18.562 32.552z"></path>
                                                                <path fill="#FDD231" d="M18.562.16L8.474 1.225l-.56 10.484zM18.562.16L28.65 1.225l.56 10.484z"></path>
                                                                <path fill="#FDAD00" d="M36.464 11.71l-7.81-10.484.56 10.484zM.664 11.71l7.81-10.484-.56 10.484z"></path>
                                                                <path fill="#FEEEB7" d="M18.562.16L7.914 11.71H29.21z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#F11B5C" d="M32.627 0H3.973A3.173 3.173 0 0 0 .8 3.173v28.654A3.173 3.173 0 0 0 3.973 35h28.654a3.173 3.173 0 0 0 3.173-3.173V3.173A3.173 3.173 0 0 0 32.627 0"></path>
                                                                <path fill="#FFF" d="M12.497 11.012c1.163 0 2.138-.912 2.138-2.107 0-1.194-.975-2.106-2.138-2.106-1.164 0-2.138.912-2.138 2.106 0 1.195.974 2.107 2.138 2.107M8.064 22.294a7.236 7.236 0 0 0-.189 1.583c0 1.855 1.006 3.087 3.144 3.087 1.774 0 3.211-1.053 4.246-2.754l-.632 2.537h3.521l2.013-8.072c.503-2.043 1.478-3.104 2.956-3.104 1.163 0 1.886.723 1.886 1.918 0 .346-.031.723-.157 1.132l-1.038 3.71a5.577 5.577 0 0 0-.22 1.572c0 1.761 1.038 3.05 3.207 3.05 1.855 0 3.333-1.195 4.15-4.056l-1.383-.534c-.692 1.917-1.289 2.263-1.76 2.263-.472 0-.724-.314-.724-.942 0-.283.063-.597.157-.976l1.007-3.614a7.972 7.972 0 0 0 .346-2.293c0-2.704-1.636-4.115-3.616-4.115-1.855 0-3.742 1.673-4.685 3.434l.691-3.16h-5.376l-.755 2.783h2.516l-1.55 6.202c-1.216 2.704-3.45 2.748-3.73 2.685-.46-.104-.755-.279-.755-.877 0-.345.063-.841.22-1.439l2.358-9.355H7.938l-.755 2.784h2.484l-1.603 6.551"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                    <div className={cs('col', 'pl-0')} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 40 32">
                                                            <g fill="none" fill-rule="nonzero">
                                                                <path fill="#FDBD39" d="M6.165 22.059l-2.092.764-.111 6.224 7.242-2.646c-2.486-.832-4.3-2.3-5.039-4.342"></path>
                                                                <path fill="#F69833" d="M7.26 15.477L0 18.129l4.073 4.696 2.092-.764c-.737-2.036-.282-4.334 1.095-6.584"></path>
                                                                <path fill="#FECF33" d="M19.477 6.494C10.232 9.871 4.27 16.841 6.165 22.06l33.478-12.23C37.748 4.613 28.72 3.119 19.477 6.495"></path>
                                                                <path fill="#EE6723" d="M26.33 25.396C35.575 22.019 41.545 15.08 39.64 9.83L6.164 22.06c1.904 5.251 10.921 6.714 20.166 3.337"></path>
                                                                <path fill="#F69833" d="M39.641 9.83L6.165 22.059c.655 1.808 3.156 2.699 6.663 2.699 3.42 0 7.797-.846 12.36-2.513C34.433 18.868 40.936 13.4 39.641 9.83"></path>
                                                                <path fill="#FDBD39" d="M32.979 7.133c-3.419 0-7.797.845-12.36 2.512C11.372 13.022 4.87 18.49 6.164 22.06l33.478-12.23c-.657-1.807-3.156-2.696-6.664-2.696"></path>
                                                                <g fill="#EE6723">
                                                                    <path d="M31.13 29.378c-.986 0-2.439-.89-4.32-2.644-2.225-2.076-4.773-5.117-7.177-8.562-2.403-3.445-4.377-6.888-5.56-9.698-1.289-3.061-1.473-4.943-.547-5.594.214-.146.468-.221.727-.214.753 0 2.222.56 4.936 3.232l.06.058-.008.083c-.019.193-.035.386-.05.577l-.03.377-.266-.268c-2.925-2.946-4.211-3.263-4.63-3.263a.484.484 0 0 0-.282.071c-.403.283-.43 1.665.82 4.632 1.162 2.758 3.108 6.15 5.48 9.55 2.373 3.402 4.882 6.396 7.069 8.435 2.356 2.199 3.418 2.437 3.766 2.437.12 0 .216-.025.289-.077.423-.297.423-1.778-.97-4.972l-.064-.146.14-.077c.14-.076.276-.15.402-.224l.168-.095.078.176c.987 2.264 1.91 5.14.7 5.991-.215.147-.47.221-.732.215zm0-.35v.175-.174z"></path>
                                                                    <path d="M26.554 25.3l-.013.172c-.234 2.892-.85 6.368-2.455 6.51-.033.003-.066.003-.098.003-1.09 0-2.122-1.562-3.064-4.641-.894-2.915-1.587-6.827-1.951-11.017-.366-4.19-.36-8.162.015-11.189C19.397 1.841 20.174.12 21.301.02c.033-.003.068-.005.102-.005.79 0 1.982.896 3.202 5.067l-.796.153c-.407-1.393-.851-2.526-1.291-3.307-.407-.72-.805-1.117-1.115-1.117-.01 0-.02 0-.032.002-.489.043-1.2 1.226-1.595 4.423-.37 2.972-.374 6.887-.014 11.022.361 4.136 1.042 7.99 1.92 10.851.392 1.282.822 2.338 1.246 3.055.389.661.766 1.025 1.06 1.025.01 0 .02 0 .03-.002.467-.04 1.348-1.273 1.719-5.608l.817-.28z"></path>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, 'pt-0', styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Team Members Involved</h5>
                                                </ div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>Project Manager</span></li>
                                                    <li><span>IA &amp; UX Lead</span></li>
                                                    <li><span>UI Design Lead</span></li>
                                                    <li><span>UI Designer</span></li>
                                                </ul>
                                            </div>
                                        </ div>
                                    </div>
                                </ div >

                            </div >
                        </section >
                    </div >
                    <div key='4'>
                        <section className={cs([styles.standout, styles.common__work__sec, styles.development__sec, styles.maintenance__sec])}>
                            <div className={cs(['common__text__section', styles.text__black, styles.development__mobile, styles.common_text])}>
                                <h4 className={cs(styles.commonh4)}>Development</h4>
                            </div>
                            <div className={styles.we__work__section}>
                                <div className={cs([styles.workshop_wrap, styles.black__bg__info, styles.common__pad__wrap, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs('col-sm-12', 'col-lg-8', 'col-xl-7', styles.black__bg__info, styles.box__down, 'p-0')}>
                                            <div className={cs([styles.common__pad__left, styles.common__padd__left])}>
                                                <div className={cs([styles.common__text__section, styles.text__white])}>
                                                    < h5 className={styles.sub__header}> Objective</h5>
                                                </div>
                                                <ul className={cs([styles.text__white, styles.common__padd__left_ul])} >
                                                    <li><span>Catering the requirement for frontend, backend, web services, and API development integration.</span></li>
                                                    <li><span>Prepare a strategy for Agile Scrum methodology</span></li>
                                                    <li><span>Factor the aspects of multi-tenancy, scalability, 3rd party integration</span></li>
                                                    <li><span>To set up a 2-3 week frequency for sprints/milestones</span></li>
                                                    <li><span>Crafting an optimized clean code structure</span></li>
                                                    <li><span>Involve client review in each sprint/milestone</span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={cs(['col-md-12', 'col-lg-5', styles.box__down, 'p-0', styles.mobile__white__bg])}>
                                            <div className={cs([styles.discovery__workshop__right, styles.design__box, styles.uipl_section_reveal_check, styles.reveal_me])}>
                                                <img className={cs([styles.blur__out, styles.design__box_img])} src="https://www.unifiedinfotech.net/assets/images/development@2x.jpg" alt="Unified Infotech process" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cs(styles.workshop_wrap, [styles.white__bg__info, styles.common__pad__wrap, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')} >
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Web Technologies</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>Back-end.     : Laravel, Ruby, Python, Node.JS, Java</span></li>
                                                    <li><span>Front-end.    : AngularJS, ReactJS, VueJS Html5, CSS</span></li>
                                                    <li><span>Database.     : MongoDB, Mysql, PostgreSQL, Firebase</span></li>
                                                    <li><span>OpenSource    : Drupal, Magento, Wordpress</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Mobile Technologies</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>iOS       : ObjectiveC, Swift, xCode</span></li>
                                                    <li><span>Android.  : Java, Android studio</span></li>
                                                    <li><span>Hybrid.   : Ionic, ReactNative</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Team Members Involved</h5>
                                                </div>
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>Project Manager</span></li>
                                                    <li><span>Team Lead</span></li>
                                                    <li><span>Front-End Developers</span></li>
                                                    <li><span>Back-End Developers</span></li>
                                                    <li><span>QA Engineer</span></li>
                                                </ul>
                                            </div>
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </section>
                    </div >
                    <div key="5">
                        <section className={cs(['common__work__sec', styles.common__work__sec, styles.testing__sec])} key={`section5`}>
                            <div className={cs([styles.text__black, styles.testing__mobile, styles.common_text])}>
                                <h4 className={cs(styles.commonh4)}>Testing</h4>
                            </div>
                            <div className={cs([styles.testing__bg])}>
                                <div className={styles.we__work__section}>
                                    <div className={cs(styles.testing__wrap, styles.common__pad__wrap, styles.common__padd__wrap)}>
                                        <div className={cs('row', 'm-0')}>
                                            <div className={cs(['col-md-12', 'col-lg-6', 'p-0'])}>
                                                <div className={cs([styles.common__pad__left, styles.box__down, styles.black__bg__info, styles.black__sec__padd, styles.common__padd__left])}>
                                                    <div className={cs([styles.common_text, styles.text__white])}>
                                                        <h5>Objective</h5>
                                                    </div>
                                                    <ul className={cs([styles.text__white, styles.common__padd__left_ul, styles.common__padd__left])}>
                                                        <li><span>Each sprint/milestone is tested manually.</span></li>
                                                        <li><span>Bugs are reported and added to product backlog.</span></li>
                                                        <li><span>Upon bug fixing, quality release is provided and then the final demo of the sprint is sent to the client for approval.</span></li>
                                                        <li><span>Regression testing after each sprint to ensure proper functioning of the previous approved sprints/milestones.</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={cs(['col-sm-12', 'p-0', 'col-lg-6', styles.black__down, styles.mobile__white__bg])}>
                                                <div className={cs([styles.discovery__workshop__right, styles.design__box, styles.uipl_section_reveal_check, styles.reveal_me])}>
                                                    <img className={cs([styles.blur__out, styles.design__box_img])} src="https://www.unifiedinfotech.net/assets/images/testing@2x.jpg" alt="Unified Infotech process" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cs(styles.we__work__section, styles.padt__5)}>
                                <div className={cs([styles.common__pad__wrap, styles.white__bg__info, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs(['col-sm-9', 'col-lg-8', 'col-xl-8', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, styles.design__tools__sec, styles.common__padd__left])} >
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    < h5 > Tools</h5>
                                                </div>
                                                <div className={cs('row', 'm-0')}>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/jira@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/mantis-bug-tracker-logo@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/firebase@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/jmeter@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/GTmetrix@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                    <div className={cs(['col-4', styles.tools__col, 'pl-0'])} >
                                                        <div className={cs(styles.tools__img)} >
                                                            <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/se@2x.jpg" alt="Unified Infotech process" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div >
                                        </div >
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Types of testing</h5>
                                                </div >
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>Unit Testing</span></li>
                                                    <li><span>Manual Testing</span></li>
                                                    <li><span>Regression Testing</span></li>
                                                    <li><span>Security Testing</span></li>
                                                    <li><span>Automation Testing</span></li>
                                                    <li><span>Load &amp; Stress Testing</span></li>
                                                    <li><span>Performance</span></li>
                                                    <li><span>Code Review</span></li>
                                                </ul >
                                            </div >
                                        </div >
                                        <div className={cs(['col-sm-8', 'p-0'])}>
                                            <div className={cs(styles.common__pad__left, styles.common__padd__left)}>
                                                <div className={cs([styles.common_text, styles.text__black])}>
                                                    <h5>Team Members Involved</h5>
                                                </div >
                                                <ul className={cs([styles.text__black, styles.common__padd__left_ul])} >
                                                    <li><span>Account Manager</span></li>
                                                    <li><span>Project Manager</span></li>
                                                    <li><span>QA</span></li>
                                                </ul >
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </section>
                    </div>
                    <div key="6">
                        <section className={cs(['common__work__sec', styles.common__work__sec, styles.development__sec, styles.maintenance__sec])} key={`section6`}>
                            <div className={cs(['common__text__section', styles.text__black, styles.maintenance__mobile, styles.common_text])}>
                                <h4 className={cs(styles.commonh4)}>Maintenance</h4>
                            </div>
                            <div className={cs(styles.we__work__section)}>
                                <div className={cs([styles.workshop_wrap, styles.black__bg__info, styles.common__pad__wrap, styles.common__padd__wrap])}>
                                    <div className={cs('row', 'm-0')}>
                                        <div className={cs(['col-md-12', 'col-lg-6', 'p-0'])}>
                                            <div className={cs([styles.common__pad__left, styles.box__down, styles.black__bg__info, styles.black__sec__padd, styles.common__padd__left])}>
                                                <div className={cs([styles.common_text, styles.text__white])}>
                                                    <h5>Overview</h5>
                                                </div>
                                                <ul className={cs([styles.text__white, styles.common__padd__left_ul])}>
                                                    <li><span>Product enhancement through an Agile approach</span></li>
                                                    <li><span>Regular Security Audits</span></li>
                                                    <li><span>Bi-weekly code back-ups</span></li>
                                                    <li><span>Constant upgradation of the system based on new software/version release</span></li>
                                                    <li><span>Full Testing the system each month to find any bugs, incompatibility and error</span></li>
                                                    <li><span>Monitoring of the traffic and server load and optimizing according to the business needs. </span></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={cs(['col-md-12', 'col-lg-5', styles.box__down, 'p-0', styles.mobile__white__bg])}>
                                            <div className={cs([styles.discovery__workshop__right, styles.design__box, styles.uipl_section_reveal_check, styles.reveal_me])}>
                                                <img className={cs([styles.blur__out, styles.design__box_img])} src="https://www.unifiedinfotech.net/assets/images/maintenance@2x.jpg" alt="Unified Infotech process" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div >
            </section >
            <section className={styles.project__structure__sec}>
                <div className={cs("container-fluid")}>
                    <div className={cs("row")}>
                        <div className={cs("col-12")}>
                            <div className={cs([styles.common_text, styles.text__black, 'text-center'])}>
                                <h3 className={cs("mb-5", styles.h3)} > Project Communication Structure</h3>
                            </div>
                        </div>
                        <div className={cs(["col-sm-6", "col-md-6", "col-lg-3", "col-xl-3", "mb-3"])} >
                            <div className={cs(["card", styles.project__card, styles.black__bg__info, styles.text__white])} >
                                < div className={cs("card-body", styles.card__body)} >
                                    <h5 className={cs("card-title")} > Daily Scrum < span > Standup</span></h5>
                                </div>
                                <ul className={cs(["list-group", styles.black__bg__info, styles.list__group])}>
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} > Mon - Fri < span > 30 minutes</span></li>
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} >Check previous day’s work, current day’s plans, any queries, hurdles etc</li>
                                </ul >
                                <div className={cs(["card-body", "card-footer", styles.card__body])} >
                                    <p className={cs(["list-text", styles.list__text])} > Project Manager  with the entire Project Team</ p>
                                </div>
                            </div >
                        </div >
                        <div className={cs(['col-sm-6', 'col-md-6', 'col-lg-3', 'col-xl-3', 'mb-3'])} >
                            <div className={cs(["card", styles.project__card, styles.black__bg__info, styles.text__white])} >
                                <div className={cs("card-body", styles.card__body)} >
                                    <h5 className={cs(["card-title", styles.card__title])} > Weekly < span > Review</span ></h5 >
                                </div >
                                <ul className={cs(["list-group", styles.black__bg__info, styles.list__group])}>
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} > Weekly < span > 45 - 60 minutes</span ></li >
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} > "Improvements to process
                                (No finger pointing!)"</li>
                                </ul >
                                <div className={cs("card-body", "card-footer")} >
                                    <p className={cs(["list-text", styles.list__text])} > Client along with the Project Manager & amp; Team Lead</ p>
                                </div >
                            </div >
                        </div >
                        <div className={cs(['col-sm-6', 'col-md-6', 'col-lg-3', 'col-xl-3', 'mb-3'])} >
                            <div className={cs(["card", styles.project__card, styles.black__bg__info, styles.text__white])} >
                                <div className={cs("card-body")} >
                                    <h5 className={cs("card-title")} > Sprint < span > Delivery</span ></h5 >
                                </div >
                                <ul className={cs(["list-group", styles.black__bg__info, styles.list__group])}>
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} > 2 - 3 weeks < span > 1 - 2 hours </span ></li >
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} >Demonstration for the client.</li>
                                </ul>
                                <div className={cs("card-body", "card-footer")} >
                                    <p className={cs(["list-text", styles.list__text])} >Client along with the Project Manager &amp; Team Lead.</ p>
                                </div>
                            </div >
                        </div >
                        <div className={cs(['col-sm-6', 'col-md-6', 'col-lg-3', 'col-xl-3', 'mb-3'])} >
                            <div className={cs(["card", styles.project__card, styles.black__bg__info, styles.text__white])} >
                                <div className={cs("card-body")} >
                                    <h5 className={cs("card-title")} > Code < span > Reviews</span ></h5 >
                                </div >
                                <ul className={cs(["list-group", styles.black__bg__info, styles.list__group])}>
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} > Bi - Weekly < span > 3 - 4 hours</span ></li >
                                    <li className={cs(["list-group-item", styles.list__text, styles.list__group__item])} >Code Review</li >
                                </ul >
                                <div className={cs("card-body", "card-footer")} >
                                    <p className={cs(["list-text", styles.list__text])}> Tech Lead</p >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </section >
            <section className={cs([styles.work__common__sec, styles.collabotation__tools__sec])}>
                <div className={cs("container-fluid")} >
                    <div className={cs("row")} >
                        <div className={cs("col-md-5")} >
                            <div>
                                <div className={cs([styles.common__text, styles.text__black, "text-left"])} >
                                    <h3 className={cs("mb-3", styles.h3)} > Collaboration Tools</h3>
                                    <p>We make sure to use the tools that are top of the market to bring your ideas into reality. Our careful selection of tools makes sure that your ideas are executed with the highest level of efficiency.</p>
                                </div>
                            </div>
                        </div>
                        <div className={cs("col-md-7")} >
                            <div className={cs("row")} >
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/jira@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/slack@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/github@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/asana@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/invision@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/axure@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/zeplin@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/office365@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])} >
                                    <div className={cs(styles.tools__img)} >
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/zoom@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                                <div className={cs(["col-3", styles.tools__img__list])}>
                                    < div className={cs(styles.tools__img)}>
                                        <img className={cs(styles.blur__out)} src="https://www.unifiedinfotech.net/assets/images/skype@2x.jpg" alt="Unified Infotech process" />
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
            <section className={cs([styles.work__common__sec, styles.collabotation__tools__sec])}>
                <div className={cs("container-fluid")} >
                    <div className={cs("row")} >
                        <div className={cs("col-md-5")} >
                            <div>
                                <div className={cs([styles.common__text, styles.text__black, "text-left"])} >
                                    <h3 className={cs("mb-3", styles.h3)} >Engagement Models</h3>
                                    <p>We aim to deliver excellence at every step of projects and finish our job with the top level of efficiency and dedication.</p>
                                </div>
                            </div>
                        </div>
                        <div className={cs("col-md-7")}>
                            <div className={cs("panel-group", styles.accordion__wrap)}>
                                <div className={cs(["panel", styles.panel__default, "pt-0"])}>
                                    <div className={cs(styles.panel__heading)} id="headingOne">
                                        <h4 className={cs(styles.panel__title)}>
                                            < a className={cs({ [styles.collapsed]: !collapsible.collapsible1 }, styles.a_link)} onClick={() => { handleCollapse(1) }}>
                                                Time and Material based
                                            </a>
                                        </h4>
                                    </div>

                                    <div className={cs("panel-collapse", "collapse", { "show": collapsible.collapsible1 })} id="collapseOne">
                                        <div className={cs(styles.panel__body)}>When the scope of your idea is not clear, we tend to go with the T&amp;M based model to provide you with more efficiency as we continue with your project. </div>
                                    </div>
                                </div>
                                <div className={cs(["panel", styles.panel__default])}>
                                    <div className={cs(styles.panel__heading)} id="headingOne">
                                        <h4 className={cs(styles.panel__title)}>
                                            <a className={cs({ [styles.collapsed]: !collapsible.collapsible2 }, styles.a_link)} onClick={() => { handleCollapse(2) }}>
                                                Dedicated Teams
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" className={cs("panel-collapse", "collapse", { "show": collapsible.collapsible2 }, { [styles.show__ease]: collapsible.collapsible2 })}>
                                        <div className={cs(styles.panel__body)}>To give you control over your project, the dedicated teams will be there at your disposal. We aim to give you a sense of comfort as we work on your idea and our dedicated teams make sure that you do feel that sense of control
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout >
    );
}
