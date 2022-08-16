
import Link from "next/link";
import Header from './components/Header';
import styles from "../styles/users.module.scss";
import Variants from './components/skeleton.js';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from "next/image";
import Pulse from '../public/Pulse.png';
import Timer from '../public/Timer.png';
import Kardio from '../public/Pulse2.gif';
import Avatar from '@mui/material/Avatar';
import Gennadii from '../public/Gennadii.jpg';
//import '../styles/globals.css';


const Users = ({users}) => {
  return (
    <>
      <Header keywords={users} />
      <div className={styles.container}>
        <Variants />
        <div className={styles.userContainer}>
          <div className={styles.name}>
          USER NAME
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar className={styles.photo} alt="User" src={Gennadii} />
            </Stack>
          </div>
          <div className={styles.diary}>
            <div className={styles.pulse}>
            <Image src={Pulse}  alt="pulse"/>
            </div>
            <div className={styles.timer}>
            <Image src={Timer}  alt="timer"/>
            </div>
              <div className={styles.lForm2}>
                  <div className={styles.form2__div1}>
                      <input type="date" className={styles.form2__input} placeholder=" " />
                      <label for="" className={styles.form2__label}>DATE</label>
                  </div>
                  <div className={styles.form2__div2}>
                      <input type="text" className={styles.form2__input} placeholder=" " />
                      <label for="" className={styles.form2__label}>BODY WEIGHT</label>
                  </div>
                  <div className={styles.form2__div3}>
                      <input type="text" className={styles.form2__input} placeholder=" " />
                      <label for="" className={styles.form2__label}>BURNED KCAL TODAY</label>
                  </div>
              </div>
            <div className={styles.buttonZone}>
              <button className={styles.button}>100-120</button>    
              <button className={styles.button}>120-140</button>
              <button className={styles.button}>140-160</button>
              <button className={styles.button}>160-180</button>
            </div>   
            <div className={styles.buttonTime}>
              <div className={styles.lForm}>
                  <div className={styles.form__div1}>
                      <input type="number" className={styles.form__input} placeholder=" " />
                      <label for="" className={styles.form__label}>TIME</label>
                  </div>
                  <div className={styles.form__div2}>
                      <input type="number" className={styles.form__input} placeholder=" " />
                      <label for="" className={styles.form__label}>TIME</label>
                  </div>
                  <div className={styles.form__div3}>
                      <input type="number" className={styles.form__input} placeholder=" " />
                      <label for="" className={styles.form__label}>TIME</label>
                  </div>
                  <div className={styles.form__div4}>
                      <input type="number" className={styles.form__input} placeholder=" " />
                      <label for="" className={styles.form__label}>TIME</label>
                  </div>
              </div>
              <div className={styles.kardio}>
                <Image src={Kardio}  alt="kardio"/>
              </div> 
            </div>
           
              
          </div>
          </div>
          {/* <h1 className={styles.users}>Користувачі</h1>
          <ul >
            {users.map(user =>
            <li key={user.id} >
              <Link href={`/users/${user.id}`}>
                <a className={styles.a}>{user.name}</a>
              </Link>
            </li>
            )}
          </ul> */}
        
        </div>
      
      
     

    </>
  );
};

export default Users;

// export async function getStaticProps(context) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//   const users = await response.json()
//     return {
//       props: {users},
//     }
// }