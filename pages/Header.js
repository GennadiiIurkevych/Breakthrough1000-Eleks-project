import React from 'react';
import Image from "next/image";
import styles from '../styles/Header.module.scss';
import Ukrflag from '../public/прапор України.gif';
import Britishflag from '../public/british-flag.gif';
import Heart from '../public/beating-heart.gif';
import A from "./A";
import { Link } from '@mui/material';

const Header = ({children, keywords}) => {
  return (
    <>
      <div className={styles.maincontainer}>
        <div className={styles.header}>
          <Image  className={styles.heart} src={Heart} width={130} alt="heart" />
          <h1 className={styles.h}>Breakthrough<p className={styles.p}>1000</p></h1>      
          <div className={styles.nav}>
            <A  href={'/'} text="HOME" />
            <A  href={'/id'} text="HEALTH DAIRY" />
            <A  href={'/advices'} text="ADVICE" />
            <A  href={'/users'} text="LOG IN" /> 
          </div>
          <div className={styles.flags}>     
            <Link to = {'/укр'}>
              <Image className={styles.uflag} src={Ukrflag} width={30} height={30} alt="українська" />
            </Link>
            <Link to = {'/'}>
              <Image className={styles.bflag} src={Britishflag} width={30} height={30} alt="english" />
            </Link>
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