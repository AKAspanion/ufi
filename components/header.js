import cs from 'classnames';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import SubHeaderMenu from './subheadermenu.js';
import styles from './header.module.css';
import Button from './button';

const liMeta = [
  { id: 1, name: 'Services' },
  { id: 2, name: 'How we work' },
  { id: 3, name: 'Portfolio' },
  { id: 4, name: 'Company' },
];

const submeta = [
  {
    1: [
      {
        id: 11,
        name: 'Consulting',
        submeta: [
          { id: 111, name: 'Enterprise' },
          { id: 112, name: 'Startup' },
        ],
      },
      {
        id: 12,
        name: 'Web',
        submeta: [
          { id: 121, name: 'Web App' },
          { id: 122, name: 'Web Design' },
          { id: 123, name: 'PWA' },
        ],
      },
      {
        id: 13,
        name: 'Mobile Apps',
        submeta: [
          { id: 131, name: 'iOS' },
          { id: 132, name: 'Android' },
          { id: 133, name: 'React' },
          { id: 134, name: 'Enterprise Mobility' },
        ],
      },
    ],
  },
  {
    3: [
      { id: 31, name: 'Projects' },
      { id: 32, name: 'UI/UX Gallery' },
    ],
  },
  {
    4: [
      { id: 41, name: 'About Us' },
      { id: 42, name: 'Careers' },
      { id: 43, name: 'Blogs' },
      { id: 44, name: 'Contact Us' },
    ],
  },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(null);

  useScrollPosition(({ currPos }) => {
    setDark(currPos.y < 0);
  });

  const checkIfHasSubmenu = (id, active) => {
    const subdata = submeta.find(item => item.hasOwnProperty(id));
    if (subdata) {
      return <SubHeaderMenu data={subdata} show={active === id} />;
    }
  };

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
                    onMouseOver={() => setActive(id)}
                    onMouseOut={() => setActive(null)}
                    className={cs(
                      styles.navbar__li,
                      ['Services', 'Portfolio', 'Company'].includes(name) && [
                        styles.navbar__li__after,
                        styles.navbar__li_hover,
                      ],
                    )}
                  >
                    {name}
                    {['Services', 'Portfolio', 'Company'].includes(name) && (
                      <div className={styles.menu_item_arrow}>
                        <span
                          className={cs([
                            styles.menu_item_arrow__before,
                            styles.menu_item_arrow__before,
                            styles.menu_item_arrow__after,
                          ])}
                        ></span>
                      </div>
                    )}
                    {checkIfHasSubmenu(id, active)}
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
