import cs from 'classnames';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import styles from './subheadermenu.module.css';

const items = ['UI/UX Design', 'BlockChain', 'eCommerce', 'Custom Software'];

export default function SubHeaderMenu(props) {
  const { data, show } = props;
  const dataArr = (Object.keys(data) && data[Object.keys(data)[0]]) ?? [];
  const isFirst = dataArr[0] && dataArr[0].submeta !== undefined;

  return (
    <div
      className={cs(styles.nav__submenu, {
        [styles.nav__visible]: show === true,
        [styles.nav__left]: isFirst === true,
      })}>
      <div className={cs(styles.sub__elem)}>
        <ul>
          {isFirst ? (
            <div className={styles.nav__submenu__services}>
              <div className={styles.nav__submenu__services__content}>
                <div className={styles.nav__submenu__services_title}>
                  <Link href="/services">Our Services</Link>
                </div>
                <div className={styles.nav__submenu__services_container}>
                  {dataArr.map(({ submeta = [], name, id, link: toplink }) => (
                    <div key={id} className={styles.nav__submenu__services_item}>
                      <div
                        className={cs([
                          styles.nav__submenu__services_container_name,
                          styles.nav__submenu__services_container_before,
                        ])}>
                        {toplink ? <Link href={`/services${toplink}`}>{name}</Link> : name}
                      </div>
                      {submeta.map(({ name: subname, id, link: sublink }) => (
                        <li
                          key={id}
                          className={cs(styles.nav__submenu__item, [
                            styles.nav__submenu__item_hover,
                            styles.nav__submenu__item__before,
                          ])}>
                          <a>
                            {sublink ? (
                              <Link href={`/services${sublink}`}>{subname}</Link>
                            ) : (
                              subname
                            )}
                          </a>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
                <div className={styles.nav__submenu__services__extra}>
                  {items.map((name, index) => (
                    <div key={index} className={styles.nav__submenu__services__extra__item}>
                      {name}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.nav__submenu__services__img}>
                <img
                  alt="gallery"
                  src={
                    'https://www.unifiedinfotech.net/assets/images/UIPL-Mega-Menu-Gallery-Image.png'
                  }
                />
                <div
                  className={cs(styles.nav__submenu__services_container_name, 'text-center mt-4')}>
                  <span className="pr-2">Our UX gallery</span>
                  <BsArrowRight size={24} />
                </div>
              </div>
            </div>
          ) : (
            dataArr.map(({ name, id, link }) => (
              <li
                key={id}
                className={cs(styles.nav__submenu__item, [
                  styles.nav__submenu__item_hover,
                  styles.nav__submenu__item__before,
                ])}>
                <a>{link ? <Link href={link}>{name}</Link> : name}</a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
