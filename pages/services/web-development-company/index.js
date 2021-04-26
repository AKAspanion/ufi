import cs from 'classnames';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';
import { webDevPortfolio } from '../../../assets/data';

import Button from '../../../components/button';
import Layout from '../../../components/layout';
import Project from '../../../components/project';

import styles from './web-dev.module.css';

const defaults = {
  threshold: 0,
};

export default function WebDev() {
  const { ref: excellenceRef, inView: excellenceInView } = useInView(defaults);

  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.web__banner}>
        <div className={styles.web__banner__img}>
          <img
            alt={'Web dev'}
            src={
              'https://www.unifiedinfotech.net/assets/images/wdc-banner-new@2x.jpg'
            }
          />
        </div>
        <div className={styles.web__banner__content}>
          <div className={styles.web__banner__title}>WEB DEVELOPMENT</div>
          <div className={styles.web__banner__subtitle}>
            We devise solutions to maximize
            <br />
            your business efficiency.
          </div>
          <div className={styles.web__banner__btn}>
            <Button>Our Success Stories</Button>
          </div>
        </div>
      </section>
      <section className={styles.web__excellence}>
        <div
          className={cs(styles.web__excellence__left, {
            [styles.web__excellence__left__visibile]: excellenceInView === true,
          })}
        >
          <div ref={excellenceRef}>
            <h3>
              Your development partner. <br />
              We stand for excellence!
            </h3>
            <p>
              Over the past decade, we have mastered the art of creating
              websites that innovate, engage and deliver results through a
              combination of human-centric approach and development ingenuity.
              Hire top web developers to make your dream a reality.
            </p>
            <p>
              Be it custom Web applications development and SaaS platforms,
              ecommerce website development or informative lead generation
              sites, our value proposition, when it comes to web development, is
              to build solutions by prioritizing the context and needs of the
              end-users, ensuring meaningful results. Enterprise or small
              business web development, we strive to deliver remarkable results
              being an award winning web development company, with a presence in
              the USA.
            </p>
            <ul className={styles.web__excellence__companies}>
              <li className={styles.clutch}>
                <img
                  src="https://www.unifiedinfotech.net/assets/images/Technology-Clutch-Icon-App.svg"
                  alt="Clutch"
                />
              </li>
              <li className={styles.deloitte}>
                <img
                  src="https://www.unifiedinfotech.net/assets/images/Technology-Deloitte-Icon-Colorful.svg"
                  alt="Deloitte"
                />
              </li>
              <li className={styles.upwork}>
                <img
                  src="https://www.unifiedinfotech.net/assets/images/Technology-Upwork-Icon.svg"
                  alt="Upwork"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.web__excellence__right}>
          <div className={styles.web__excellence__col}>
            <StatCard
              title={'1200+'}
              subtitle={
                <>
                  Solutions
                  <br />
                  delivered
                </>
              }
            />
          </div>
          <div className={styles.web__excellence__col}>
            <StatCard
              title={'150+'}
              subtitle={
                <>
                  Technology
                  <br />
                  experts
                </>
              }
            />
            <StatCard
              title={'$50M+'}
              subtitle={
                <>
                  Business
                  <br />
                  delivered
                </>
              }
            />
          </div>
        </div>
      </section>
      {webDevPortfolio.map((detail, index) => (
        <DevPortfolioCard key={index} detail={detail} />
      ))}
      <Project />
    </Layout>
  );
}

const DevPortfolioCard = ({ detail }) => {
  const {
    id,
    img,
    type,
    name,
    desc,
    color,
    bgColor,
    btnText,
    category,
  } = detail;

  const { ref, inView } = useInView(defaults);
  return (
    <section
      key={id}
      style={{ '--bg-color': bgColor }}
      className={styles.web__portfolio}
    >
      <div
        ref={ref}
        className={cs(styles.web__portfolio__left, {
          [styles.web__portfolio__left__visible]: inView === true,
        })}
      >
        <img alt={name} src={img} />
      </div>
      <div className={styles.web__portfolio__right}>
        <img
          alt={'Glow Background'}
          src={
            'https://www.unifiedinfotech.net/assets/images/Home-CaseStudies-Glow-Background.svg'
          }
        />
        <div className={styles.web__portfolio__head}>
          <h2>{category}</h2>
          <p>{type}</p>
        </div>
        <h3 style={{ '--color': color }}>{name}</h3>
        <p>{desc}</p>
        <Button dark borderedReverse>
          {btnText}
        </Button>
      </div>
    </section>
  );
};

const StatCard = ({ title, subtitle }) => {
  const { ref, inView } = useInView(defaults);
  return (
    <div
      ref={ref}
      className={cs(styles.web__excellence__stat, 'mb-4', {
        [styles.web__excellence__stat__visible]: inView === true,
      })}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
