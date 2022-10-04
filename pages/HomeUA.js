import HeaderUA from '../src/components/HeaderUA';
import styless from '../styles/home.module.scss';
import styles from "../styles/Home.module.css";
import { Typography } from '@mui/material';





const HomeUA = () => {
  return (
    <>
      <HeaderUA keywords={HomeUA} />
      <div className={styles.home}>
        <Typography>Щось так не хочетсья верстати((</Typography>
      </div>
      
    </>
  ); 
};

export default HomeUA;