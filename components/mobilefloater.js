import cs from 'classnames';

import styles from './mobilefloater.module.css';

export default function MobileFloater() {
  return (
    <div className={cs(styles.mobile__float__sec)}>
      <div className={cs('container')}>
        <div className={cs(['row', 'align-items-center'])}>
          <a
            href="https://www.unifiedinfotech.net/portfolio/"
            className={cs(['col-6', styles.stiky__border])}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
              <g fill="none" fillRule="nonzero" stroke="#FFF" transform="translate(-1)">
                <rect width="15" height="13" x="4.5" y=".5" rx="2"></rect>
                <path strokeLinecap="round" d="M22.5 3.5v7M1.5 3.5v7"></path>
              </g>
            </svg>
            <h3>Case Studies</h3>
          </a>
          <a href="https://www.unifiedinfotech.net/about/contact/" className={cs('col-6')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14">
              <g fill="none" fillRule="nonzero" stroke="#FFF">
                <rect width="15" height="13" x=".5" y=".5" rx="2"></rect>
                <path
                  strokeLinecap="round"
                  d="M4.167 4.167C6.224 5.992 7.502 6.905 8 6.905c.498 0 1.776-.913 3.833-2.738"></path>
              </g>
            </svg>
            <h3 className={styles.h3}>Get In Touch</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
