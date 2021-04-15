import cs from 'classnames';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import styles from './header.module.css';
import Button from './button';

const liMeta = [
  { id: 1, name: 'Services' },
  { id: 2, name: 'How we work' },
  { id: 3, name: 'Portfolio' },
  { id: 4, name: 'Company' },
];
export default function Header() {
  const [dark, setDark] = useState(false);

  useScrollPosition(({ currPos }) => {
    setDark(currPos.y < 0);
  });

  return (
    <header>
      <nav className={cs(styles.navbar, { [styles.dark]: dark === true })}>
        <div className={styles.container}>
          <a className={styles.logo}>LOGO</a>
          <div className={styles.content}>
            <div className={styles.content__main}>
              <ul className={styles.navbar__ul}>
                {liMeta.map(({ name, id }) => (
                  <li
                    key={id}
                    className={cs(styles.navbar__li, styles.navbar__li__after)}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.call}>
            <Button dark={dark} borderedReverse={dark}>
              Contact Us
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
