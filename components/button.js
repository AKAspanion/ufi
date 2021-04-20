import styles from './button.module.css';
import cs from 'classnames';

export default function Button({
  tag,
  dark,
  bordered,
  children,
  borderedReverse,
}) {
  return (
    <button
      className={cs(styles.button, {
        [styles.dark]: dark === true,
        [styles.bordered]: bordered === true,
        [styles.bordered_reverse]: borderedReverse === true,
        [styles.tag__style]: tag === true,
      })}
    >
      {children}
    </button>
  );
}
