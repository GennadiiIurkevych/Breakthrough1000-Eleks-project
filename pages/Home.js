import Header from '../src/components/Header';
import styles from '../styles/home.module.scss';
import styles from "../styles/Home.module.css";
import Cards from './cards';




const Home = () => {
  return (
    <>
      <Header keywords={Home} />
      <div className={styles.home}>
      
      </div>
      
    </>
  ); 
};

export default Home;