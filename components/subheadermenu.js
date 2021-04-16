import cs from 'classnames';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import styles from './subheadermenu.module.css';
import Button from './button';

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
      })}
    >
      <div className={cs(styles.sub__elem)}>
        <ul>
          {isFirst ? (
            <div className={styles.nav__submenu__services}>
              <div className={styles.nav__submenu__services_title}>
                Our Services
              </div>
              <div className={styles.nav__submenu__services_container}>
                {dataArr.map(({ submeta, name, id }) => (
                  <div className={styles.nav__submenu__services_item}>
                    <div
                      className={styles.nav__submenu__services_container_name}
                    >
                      {name}
                    </div>
                    {submeta.map(({ name: subname, id }) => (
                      <li
                        key={id}
                        className={cs(styles.nav__submenu__item, [
                          styles.nav__submenu__item_hover,
                          styles.nav__submenu__item__before,
                        ])}
                      >
                        <a>{subname}</a>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.nav__submenu__services__extra}>
                {items.map((name, index) => (
                  <div
                    key={index}
                    className={styles.nav__submenu__services__extra__item}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            dataArr.map(({ name, id }) => (
              <li
                key={id}
                className={cs(styles.nav__submenu__item, [
                  styles.nav__submenu__item_hover,
                  styles.nav__submenu__item__before,
                ])}
              >
                <a>{name}</a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
