import styles from './button.module.css';
import cs from 'classnames';

export default function Button({ dark, bordered, borderedReverse, children }) {
  return (
    <button
      className={cs(styles.button, {
        [styles.dark]: dark === true,
        [styles.bordered]: bordered === true,
        [styles.bordered_reverse]: borderedReverse === true,
      })}
    >
      {children}
    </button>
  );
}
