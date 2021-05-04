import 'react-responsive-carousel/lib/styles/carousel.min.css';

import cs from 'classnames';
import { FaQuoteLeft } from 'react-icons/fa';
import { useResizeDetector } from 'react-resize-detector';
import { Carousel } from 'react-responsive-carousel';

import { praiseList } from '../assets/data';
import styles from '../pages/index.module.css';
import Button from './button';

export default function Project() {
  const { width, ref } = useResizeDetector();

  const isSmall = width < 575;
  const isMedium = width < 980;
  return (
    <section ref={ref} className={styles.project}>
      <div className={styles.project__left}>
        <Carousel
          autoPlay
          swipeable
          infiniteLoop
          interval={2000}
          showThumbs={false}
          showStatus={false}
          showArrows={!isMedium && !isSmall}>
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
          <div className={cs(styles.project__input, styles.project__input__right)}>
            <label>Email *</label>
            <input />
          </div>
          <div style={{ width: '24px' }}></div>
          <div className={cs(styles.project__input, styles.project__input__left)}>
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
  );
}
