import React from 'react';
import Image from "next/image";
import styles from '../../styles/Header.module.scss';
import Ukrflag from '../../public/Ukr_flag.gif';
import Britishflag from '../../public/british-flag.gif';
import Heart from '../../public/beating-heart.gif';
import A from "./A";
import Link from 'next/link';


const Header = ({children, keywords}) => {
  
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.header}>
          <Link className={styles.pageHome} href={'/'}>
            <a className={styles.pageHome}>
              <Image className={styles.heart} src={Heart} width={130} alt="heart" />
              <h1 className={styles.h}>Breakthrough<span className={styles.p}>1000</span></h1>
            </a>
          </Link>  
          <div className={styles.nav}>
            <A  href={'/'} text="HOME" />
            <A  href={'/users'} text="HEALTH DAIRY" />
            <A  href={'/advices'} text="ADVICE" />
            <A  href={'/id'} text="LOG IN" /> 
          </div>
          <div className={styles.flags}>     
              <Image className={styles.uflag} src={Ukrflag} width={30} height={30} alt="українська" />
              <Image className={styles.bflag} src={Britishflag} width={30} height={30} alt="english" />
          </div>
        </div>
      </div>
      <div>
          {children}
      </div>
    </>
  );
};

export default Header;