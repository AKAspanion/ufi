import cs from 'classnames';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';
import { work } from '../../assets/data';
import Button from '../../components/button';

export default function Portfolio() {
  return (
    <Layout darkHeader>
      <Head>
        <title>Portfolio</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome.min.css"
        />
      </Head>
      <section className={styles.portfolio__wrapper}>
        <h2 className={styles.portfolio__heading}>Our Work</h2>
        <p className={styles.portfolio__description}>
          Some highlights of our favorite projects we've done
          <br /> for forward thinking clients.
        </p>
      </section>

      <section className={styles.portfolio__list__wrapper}>
        {work.map((detail, index) => (
          <PortfolioCard key={index} detail={detail} />
        ))}
      </section>
    </Layout>
  );
}

const PortfolioCard = ({ detail = {} }) => {
  const { id, img, link = '#', name, color, description, tags } = detail;

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} key={id} className={styles.portfolio__list__item}>
      <div
        className={cs(styles.portfolio__list__item__img, {
          [styles.img__inview]: inView === true,
        })}
      >
        <Link href={link}>
          <img alt={name} src={img} />
        </Link>
      </div>
      <div className={styles.portfolio__list__item__data}>
        <div
          style={{ '--title-color': color }}
          className={styles.portfolio__list__item__title}
        >
          <Link href={link}>{name}</Link>
        </div>
        <div className={styles.portfolio__list__item__desc}>
          <Link href={link}>{description}</Link>
        </div>
        <div className={styles.portfolio__list__item__tags}>
          {tags.map(tag => (
            <>
              <Button tag>{tag}</Button>
              <div style={{ width: 16 }}></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
