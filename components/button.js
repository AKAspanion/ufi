import cs from 'classnames';

import styles from './button.module.css';

export default function Button({ tag, dark, icon, bordered, children, borderedReverse }) {
  return (
    <button
      className={cs(styles.button, {
        [styles.dark]: dark === true,
        [styles.bordered]: bordered === true,
        [styles.bordered_reverse]: borderedReverse === true,
        [styles.tag__style]: tag === true,
        [styles.icon__style]: icon === true,
      })}>
      <p>{children}</p>
    </button>
  );
}
