import Header from '../src/components/Header';
import styles from '../styles/home.module.scss';
import styles from "../styles/Home.module.css";
import Cards from './cards';
import { Typography } from '@mui/material';




const Home = () => {
  return (
    <>
      <Header keywords={Home} />
      <div className={styles.home}>
        <Typography>It is so boring to code home layout</Typography>
      </div>
      
    </>
  ); 
};

export default Home;