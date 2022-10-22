import React from "react";
import styles from '../styles/user.module.scss';
import { useSelector } from "react-redux";


const LastName = () => {
  const lastName = useSelector ((state) => state.user.lastName)
  return <div className={styles.pathLastName}>{lastName}</div>
}

export default LastName;