import React from 'react';
import Image from "next/image";
import styles from '../../styles/HeaderUA.module.scss';
import Ukrflag from '../../public/Ukr_flag.gif';
import Britishflag from '../../public/british-flag.gif';
import Heart from '../../public/beating-heart.gif';
import A from "./A";
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { useUserContext } from "../contexts/UserContext";
import Router from 'next/router';


const HeaderUA = ({children, keywords}) => {
  
  const {user} = useUserContext();

  const requireAuth = (e) => {
        if (!user) {
          e.preventDefault();
          Router.replace("/login");
       }
      }

      return (<>
        <div className={styles.maincontainer}>
          <div className={styles.header}>
            <Link className={styles.pageHome} href={'/HomeUA'}>
              <a className={styles.pageHome}>
                <Image className={styles.heart} src={Heart} width={130} alt="heart"/>
              <h1 className={styles.h}>ПРОРИВ<span className={styles.p}>1000</span></h1>
              </a>
            </Link>
            <div className={styles.nav}>
              <Stack spacing={2} direction="row">
                <BootstrapButton variant="contained" disableRipple>
                  <A href={'/HomeUA'} text="ДОМАШНЯ"/>
                </BootstrapButton>
                <BootstrapButton variant="contained" disableRipple>
                  <A href={'/users'} text="ЩОДЕННИК ЗДОРОВ'Я" onClick={requireAuth}/>
                </BootstrapButton>
                <BootstrapButton variant="contained" disableRipple>
                  <A href={'/advices'} text="ПОРАДИ" onClick={requireAuth}/>
                </BootstrapButton>
                <BootstrapButton variant="contained" disableRipple>
                  <A href={'/login'} text="АВТОРИЗАЦІЯ" onClick={requireAuth}/>
                </BootstrapButton>
                <BootstrapButton variant="contained" disableRipple>
                  <A href={'/archive'} text="МІЙ АРХІВ" onClick={requireAuth}/>
                </BootstrapButton>
              </Stack>
            </div>
            <div className={styles.flags}>
              <Link href='/HomeUA' alt=''>
                <a>
                <Image className={styles.uflag} src={Ukrflag} width={30} height={30} alt="українська"/>
                </a>
              </Link>
              <Link href='/' alt=''>
                <a>
                  <Image className={styles.bflag} src={Britishflag} width={30} height={30} alt="english"/>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {children}
        </div>
      </>);
};


export default HeaderUA;

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '2px 6px',
  border: '1px solid',
  borderRadius: '10px',
  lineHeight: 1,
  backgroundColor: '#00ffff',
  borderColor: '#0063cc',
  fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',].join(','),
  '&:hover': {
    backgroundColor: '#0069d9', borderColor: '#0062cc', boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none', backgroundColor: '#0062cc', borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

  const ColorButton = styled(Button)(({theme}) => ({
   color: theme.palette.getContrastText(purple[500]), backgroundColor: purple[500], '&:hover': {
   backgroundColor: purple[700],
  },
}));

