import React from "react";
import styles from '../styles/user.module.scss';
import FirstName from '../pages/FirstName';
import LastName from '../pages/LastName';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName } from "./features/user/userSlice";


const User = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.user}>
      <input 
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          dispatch(setFirstName(e.target.value))
        }}
        className={styles.firstNames}
        />
      <input 
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          dispatch(setLastName(e.target.value))
        }}
        className={styles.lastNames}
        />     
      <div className="styles.firstName">
        <div>First Name:</div>
        <div>
          <FirstName/>
        </div>
      </div>
      <div className="styles.lastName">
        <div>Last Name:</div>
        <div>
          <LastName/>
        </div>
      </div>
    </div>
  )
}

export default User;