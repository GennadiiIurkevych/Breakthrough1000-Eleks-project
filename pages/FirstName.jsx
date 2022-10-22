import React from "react";
import styles from '../styles/user.module.scss';
import { useSelector } from "react-redux";

const FirstName = () => {
  const name = useSelector ((state) => state.user.firstName)
  return <div className={styles.pathFirstName}>{name}</div>
}

export default FirstName;