import cs from 'classnames';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

import { smartData, techStack, timeline, webDevPortfolio } from '../../../assets/data';
import Button from '../../../components/button';
import Layout from '../../../components/layout';
import Project from '../../../components/project';
import styles from './web-dev.module.css';

const defaults = {
  threshold: 0,
};

export default function WebDev() {
  const { ref: excellenceRef, inView: excellenceInView } = useInView(defaults);
  const { ref: tectStackRef, inView: tectStackInView } = useInView(defaults);

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
            src={'https://www.unifiedinfotech.net/assets/images/wdc-banner-new@2x.jpg'}
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
          })}>
          <div ref={excellenceRef}>
            <h3>
              Your development partner. <br />
              We stand for excellence!
            </h3>
            <p>
              Over the past decade, we have mastered the art of creating websites that innovate,
              engage and deliver results through a combination of human-centric approach and
              development ingenuity. Hire top web developers to make your dream a reality.
            </p>
            <p>
              Be it custom Web applications development and SaaS platforms, ecommerce website
              development or informative lead generation sites, our value proposition, when it comes
              to web development, is to build solutions by prioritizing the context and needs of the
              end-users, ensuring meaningful results. Enterprise or small business web development,
              we strive to deliver remarkable results being an award winning web development
              company, with a presence in the USA.
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
      <section
        className={cs(styles.web__tech__stack, {
          [styles.web__tech__stack__visible]: tectStackInView === true,
        })}>
        <div ref={tectStackRef}>
          <h2>Our Technology Stack</h2>
          <div className={styles.web__tech__table}>
            {techStack.map(({ id, name, technologies }) => (
              <div key={id} className={styles.web__tech__table__row}>
                <h3 className={styles.web__tech__table__cell}>{name + ':'}</h3>
                {technologies.map(({ id: techId, name: techName }) => (
                  <div key={techId} className={styles.web__tech__table__cell}>
                    {techName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.web__smart}>
        <div className={styles.web__smart__heading}>
          <h2>They call it best-in-class. We call it SMART thinking.</h2>
          <p>
            We take pride in developing enterprise web services and small business web solutions to
            meet your specific needs. Smart choices of latest technologies and deployment of
            standardized coding frameworks, help us ensure that our processes and solutions are
            scalable and future-proof, enhancing the user experience. Invariably, the result is a
            powerful software to the world. Our 10+ years of combined expertise in web design and
            big/small business web development sets us apart.
          </p>
        </div>
        <div className={styles.web__smart__grid}>
          {smartData.map((detail, index) => (
            <SmatCard key={index} detail={detail} />
          ))}
        </div>
        <Button dark borderedReverse>
          How we work
        </Button>
      </section>
      <section className={styles.web__timeline}>
        <div className={styles.web__timeline__heading}>
          <h1>Our development process</h1>
          <p>
            Our process ensures that an interface is seamless for the end-user to become familiar
            with and competent in using during the first contact they make. The agile approach makes
            it intuitive for users to achieve their objectives and easy to recall on subsequent
            visits. Our designers work with developers to make the attributes stand out by turning
            the usability to the max.
          </p>
        </div>
        {timeline.map((detail, index) => (
          <TimeLine key={index} detail={detail} />
        ))}
      </section>
      <Project />
    </Layout>
  );
}

const TimeLine = ({ detail }) => {
  const { id, title, orientation, list } = detail;

  const isLeft = orientation === 'left';
  const isRight = orientation === 'right';

  const { ref, inView } = useInView(defaults);

  return (
    <>
      <div
        className={cs(
          styles.web__timeline__item,
          styles.web__timeline__item__divider,
          styles.web__timeline__item__divider__mobile
        )}>
        <h1>{id}</h1>
      </div>
      <div ref={ref} className={styles.web__timeline__content}>
        <div
          className={cs(styles.web__timeline__item, {
            [styles.web__timeline__item__left]: isLeft,
            [styles.web__timeline__item__left__visible]: inView === true,
          })}>
          {isLeft && <TimeLineCard title={title} list={list} isLeft={isLeft} />}
        </div>
        <div
          className={cs(
            styles.web__timeline__item,
            styles.web__timeline__item__divider,
            styles.web__timeline__item__divider__desktop
          )}>
          <h1>{id}</h1>
        </div>
        <div
          className={cs(styles.web__timeline__item, {
            [styles.web__timeline__item__right]: isRight,
            [styles.web__timeline__item__right__visible]: inView === true,
          })}>
          {isRight && <TimeLineCard title={title} list={list} />}
        </div>
      </div>
    </>
  );
};

const TimeLineCard = ({ title, list }) => {
  return (
    <div className={styles.web__timeline__item__card}>
      <h2>{title}</h2>
      <ul>
        {list.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

const DevPortfolioCard = ({ detail }) => {
  const { id, img, type, name, desc, color, bgColor, btnText, category } = detail;

  const { ref, inView } = useInView(defaults);
  return (
    <section key={id} style={{ '--bg-color': bgColor }} className={styles.web__portfolio}>
      <div
        ref={ref}
        className={cs(styles.web__portfolio__left, {
          [styles.web__portfolio__left__visible]: inView === true,
        })}>
        <img alt={name} src={img} />
      </div>
      <div className={styles.web__portfolio__right}>
        <img
          alt={'Glow Background'}
          src={'https://www.unifiedinfotech.net/assets/images/Home-CaseStudies-Glow-Background.svg'}
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

const SmatCard = ({ detail }) => {
  const { id, name, desc } = detail;

  const { ref, inView } = useInView(defaults);

  return (
    <div
      ref={ref}
      key={id}
      className={cs(styles.web__smart__grid__holder, {
        [styles.web__smart__grid__visible]: inView === true,
      })}>
      <div key={id} className={styles.web__smart__grid__item}>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const StatCard = ({ title, subtitle }) => {
  const { ref, inView } = useInView(defaults);
  return (
    <div
      ref={ref}
      className={cs(styles.web__excellence__stat, 'mb-4', {
        [styles.web__excellence__stat__visible]: inView === true,
      })}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};
