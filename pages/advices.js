import Header from './Header';
import styles from '../styles/advices.module.scss';
const Advice = () => {
  return (
    <Header keywords={Advice}>
      <div className={styles.advice}>
        <h1>Поради</h1>
      </div>
    </Header>
  );
};

export default Advice;