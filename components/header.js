import cs from 'classnames';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import Collapsible from 'react-collapsible';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { BsChevronDown } from 'react-icons/bs';
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

const oneData = [
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
];

const submeta = [
  {
    1: oneData,
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
  const [showMenu, setShowMenu] = useState(false);

  useScrollPosition(({ currPos }) => {
    setDark(currPos.y < 0);
  });

  const checkIfHasSubmenu = (id, active) => {
    const subdata = submeta.find(item => item.hasOwnProperty(id));
    if (subdata) {
      return <SubHeaderMenu data={subdata} show={active === id} />;
    }
  };

  const getNested = id => {
    const subdata = submeta.find(item => item.hasOwnProperty(id));

    if (subdata) {
      const dataArr = Object.keys(subdata) && subdata[Object.keys(subdata)[0]];
      if (dataArr) {
        return dataArr;
      }
    }

    return [];
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
          <div className={styles.menu} onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <CgClose size={32} />
            ) : (
              <HiOutlineMenuAlt4 size={32} color={dark ? 'black' : 'white'} />
            )}
          </div>
          <div
            className={cs(styles.menu__wrapper, {
              [styles.menu__wrapper_visible]: showMenu === true,
            })}
          >
            <div className={styles.menu__header}>
              <div className={styles.menu__logo}></div>
              <div className={styles.menu__close}></div>
            </div>
            <div className={styles.menu__container}>
              <div className={styles.menu__top}>
                {liMeta.map(({ id, name }) => (
                  <>
                    <Collapsible
                      trigger={
                        <div key={id} className={styles.menu__top__title}>
                          {name}
                          {getNested(id).length !== 0 && <BsChevronDown />}
                        </div>
                      }
                    >
                      <div className={styles.menu__top__sub}>
                        {getNested(id).map(({ id, name, submeta = [] }) => (
                          <Collapsible
                            trigger={
                              <div key={id} className={styles.menu__sub__head}>
                                {name}
                                {submeta.length !== 0 && <BsChevronDown />}
                              </div>
                            }
                          >
                            {submeta.map(({ id, name }) => (
                              <div key={id} className={styles.menu_sub__sub}>
                                {name}
                              </div>
                            ))}
                          </Collapsible>
                        ))}
                      </div>
                    </Collapsible>
                  </>
                ))}
              </div>
              <div className={styles.menu__bottom}>
                <div className={styles.social__icons}>
                  <ul>
                    <li>
                      <a target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 17 13"
                        >
                          <path
                            fill="#444444"
                            fillRule="evenodd"
                            d="M16.272 1.67a6.975 6.975 0 0 1-1.627 1.677c.01.14.01.281.01.422 0 4.289-3.264 9.231-9.23 9.231a9.168 9.168 0 0 1-4.983-1.456c.261.03.512.04.783.04a6.498 6.498 0 0 0 4.028-1.386 3.25 3.25 0 0 1-3.033-2.25c.2.03.402.05.613.05.29 0 .582-.04.853-.11a3.245 3.245 0 0 1-2.601-3.185v-.04c.432.241.934.392 1.466.412a3.242 3.242 0 0 1-1.446-2.702c0-.603.16-1.155.442-1.638a9.222 9.222 0 0 0 6.69 3.396 3.662 3.662 0 0 1-.08-.744A3.243 3.243 0 0 1 11.4.143c.934 0 1.778.392 2.37 1.024a6.387 6.387 0 0 0 2.06-.783 3.236 3.236 0 0 1-1.427 1.788 6.505 6.505 0 0 0 1.868-.502z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 8 17"
                        >
                          <path
                            fill="#444444"
                            fillRule="nonzero"
                            d="M5.323 5.57V4.106c0-.22.01-.39.031-.511a.986.986 0 0 1 .14-.356.574.574 0 0 1 .355-.242c.163-.045.38-.068.651-.068h1.48V0H5.614C4.247 0 3.264.321 2.667.964s-.896 1.59-.896 2.842V5.57H0V8.5h1.77V17h3.553V8.5h2.364L8 5.57H5.323z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 15"
                        >
                          <path
                            fill="#444444"
                            fillRule="evenodd"
                            d="M3.625 4.85v9.954H.31V4.849h3.315zm.211-3.074c.01.954-.713 1.717-1.868 1.717h-.02C.833 3.493.12 2.73.12 1.776.12.8.863.058 1.988.058c1.135 0 1.838.743 1.848 1.718zm4.922 4.488c.436-.682 1.223-1.646 2.983-1.646 2.18 0 3.807 1.427 3.807 4.48v5.706h-3.305V9.48c0-1.336-.482-2.25-1.677-2.25-.914 0-1.456.613-1.698 1.205-.08.221-.11.513-.11.814v5.555H5.453c.04-9.02 0-9.955 0-9.955h3.305v1.415z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="#444444"
                            fillRule="evenodd"
                            d="M10.334 7.715a2.576 2.576 0 0 0-2.572-2.572 2.576 2.576 0 0 0-2.571 2.572 2.576 2.576 0 0 0 2.571 2.571 2.576 2.576 0 0 0 2.572-2.571zm1.386 0a3.952 3.952 0 0 1-3.958 3.958 3.952 3.952 0 0 1-3.957-3.958 3.952 3.952 0 0 1 3.957-3.958 3.952 3.952 0 0 1 3.958 3.958zm1.085-4.118a.922.922 0 0 1-.924.924.922.922 0 0 1-.924-.924c0-.513.411-.924.924-.924.512 0 .924.411.924.924zm-5.043-2.21c-1.125 0-3.535-.09-4.55.311-.351.14-.613.312-.884.583a2.466 2.466 0 0 0-.582.884c-.402 1.014-.312 3.425-.312 4.55s-.09 3.536.312 4.55c.14.352.311.613.582.884.271.271.533.442.884.583 1.015.401 3.425.311 4.55.311s3.536.09 4.55-.311c.352-.141.613-.312.885-.583.27-.271.442-.532.582-.884.402-1.014.312-3.425.312-4.55s.09-3.536-.312-4.55a2.466 2.466 0 0 0-.582-.884 2.466 2.466 0 0 0-.884-.583c-1.015-.402-3.426-.311-4.55-.311zm7.715 6.328c0 1.065.01 2.12-.05 3.184-.06 1.236-.342 2.33-1.246 3.234-.904.904-1.999 1.186-3.234 1.246-1.065.06-2.12.05-3.185.05-1.064 0-2.119.01-3.184-.05-1.235-.06-2.33-.342-3.234-1.246C.44 13.23.159 12.135.098 10.9c-.06-1.065-.05-2.12-.05-3.184 0-1.065-.01-2.12.05-3.184.06-1.236.342-2.33 1.246-3.235C2.248.392 3.343.111 4.578.051 5.643-.01 6.698 0 7.762 0c1.065 0 2.12-.01 3.185.05 1.235.06 2.33.341 3.234 1.245.904.904 1.185 2 1.245 3.235.06 1.065.05 2.12.05 3.184z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.behance.net/unifiedinfotech"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 21 13"
                        >
                          <path
                            fill="#444444"
                            fillRule="evenodd"
                            d="M13.858.854h5.133v1.245h-5.133V.854zm2.602 4.279c-1.206 0-2.01.753-2.09 1.959h4.099c-.11-1.216-.744-1.96-2.01-1.96zm.16 5.876c.764 0 1.748-.412 1.99-1.195h2.22c-.684 2.099-2.1 3.083-4.29 3.083-2.893 0-4.69-1.958-4.69-4.811 0-2.752 1.898-4.852 4.69-4.852 2.873 0 4.46 2.26 4.46 4.972 0 .161-.01.322-.02.473h-6.61c0 1.466.774 2.33 2.25 2.33zm-13.41-.502h2.974c1.135 0 2.06-.402 2.06-1.678 0-1.296-.774-1.808-2-1.808H3.211v3.486zm0-5.394h2.823c.995 0 1.698-.432 1.698-1.507 0-1.165-.904-1.446-1.908-1.446H3.21v2.953zM.43 0h5.966c2.17 0 4.048.613 4.048 3.134 0 1.276-.593 2.1-1.728 2.642 1.557.442 2.31 1.617 2.31 3.204 0 2.571-2.159 3.676-4.46 3.676H.43V0z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com/unifiedinfotech"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 17"
                        >
                          <path
                            fill="#444444"
                            fillRule="evenodd"
                            d="M10.286 14.638c-.1-.582-.482-2.591-1.407-5.002-.01 0-.03.01-.04.01 0 0-3.907 1.366-5.173 4.119-.06-.05-.15-.111-.15-.111a6.62 6.62 0 0 0 4.198 1.507c.914 0 1.778-.191 2.572-.523zM8.427 8.541c-.16-.371-.341-.743-.532-1.115-3.395 1.015-6.65.934-6.76.934-.01.07-.01.141-.01.211 0 1.688.643 3.235 1.688 4.4 1.797-3.204 5.353-4.35 5.353-4.35.09-.03.181-.05.261-.08zm-1.074-2.13a39.793 39.793 0 0 0-2.451-3.796 6.6 6.6 0 0 0-3.636 4.6c.17 0 2.923.03 6.087-.803zm6.87 3.205c-.14-.04-1.979-.623-4.108-.291a29.409 29.409 0 0 1 1.286 4.71 6.616 6.616 0 0 0 2.822-4.419zM6.137 2.173c-.01 0-.01 0-.02.01 0 0 .01-.01.02-.01zm5.927 1.456a6.539 6.539 0 0 0-5.907-1.456c.1.13 1.346 1.768 2.471 3.837 2.481-.924 3.416-2.35 3.436-2.38zm2.24 4.872a6.604 6.604 0 0 0-1.497-4.118c-.02.02-1.075 1.547-3.676 2.611.15.312.3.633.442.955.05.11.09.23.14.341 2.27-.291 4.51.201 4.59.211zm1.125.07a7.716 7.716 0 0 1-7.715 7.715A7.716 7.716 0 0 1 0 8.57 7.716 7.716 0 0 1 7.714.857a7.716 7.716 0 0 1 7.715 7.714z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.menu__copy}>
                  <div className={styles.footer__terms}>
                    <a>Terms &amp; Conditions </a>{' '}
                    <span className={styles.gap}> | </span>{' '}
                    <a> Privacy Policy</a>{' '}
                    <span className={styles.gap}> | </span> <a>Sitemap</a>
                  </div>
                  <div className={styles.footer__copyright}>
                    <p>Copyright 2021 XYZ Inc. All rights reserved.</p>
                  </div>
                  <div className={styles.footer__madewithlove}>Made with ♥</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
