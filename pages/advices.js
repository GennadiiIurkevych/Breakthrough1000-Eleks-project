import Header from './components/Header';
import styles from "../styles/Home.module.css";

const Advice = () => {
  return (
    <>
      <Header keywords={Advice} />
      <div className={styles.container}>
        <h1>INTERESTING THINKS</h1>
      </div>
    </>
  );
};

export default Advice;