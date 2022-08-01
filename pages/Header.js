import React from 'react';
import styles from '../styles/Header.module.scss';
import Ukrflag from './прапор України.gif';
import Britishflag from './british-flag.gif';
import Heart from './beating-heart.gif';

const Header = () => {
  return (
    <div className={styles.header}>
      <img  className={styles.heart} src={Heart} alt="heart" />
      <h1 className={styles.h}>Breakthrough<p className={styles.p}>1000</p></h1>
      <div className={styles.flags}>
        <img className={styles.bflag} src={Britishflag} alt="english" /> |
        <img className={styles.uflag} src={Ukrflag} alt="українська" />
      </div>
    </div>
  );
};

export default Header;