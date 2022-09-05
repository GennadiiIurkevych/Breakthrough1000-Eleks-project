import Header from "../src/components/Header";
import styles from "../styles/users.module.scss";
import Variants from "../src/components/skeleton.js";
import { useState } from "react";
import DairyCard from "./dairyCard";

const Users = ({ users }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setItems();
    setIsLoading(false);
  }, 2000);

  return (
    <>
      <Header keywords={users} />
      <div className={styles.container}>
        {isLoading ? <Variants /> : <DairyCard />}
      </div>
    </>
  );
};

export default Users;
