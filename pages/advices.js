import Header from '../src/components/Header';
import styles from "../styles/advices.module.scss";

const Advice = () => {
  return (
    <>
      <Header keywords={Advice} />
      <div className={styles.container}>
        <h1 className={styles.advice}>INTERESTING THINKS</h1>
      </div>
    </>
  );
};

export default Advice;