
import Link from "next/link";
import Header from './components/Header';
import styles from "../styles/users.module.scss";
import Variants from './components/skeleton.js';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from "next/image";
import Pulse from '../public/Pulse.png';
import Timer from '../public/Timer.png';
import Avatar from '@mui/material/Avatar';
import Gennadii from '../public/Gennadii.jpg';

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
            <Stack spacing={100} direction="row">
              <Box className={styles.button}
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
              }}
              noValidate
              autoComplete="off"
              >
              <TextField className={styles.buttonDate} id="outlined-basic"  label="DATE" variant="outlined" />
              <TextField className={styles.buttonBody} id="outlined-basic"  label="BODY WEIGHT" variant="outlined" />
              <TextField className={styles.buttonBurn} id="outlined-basic"  label="YOU BURNED KCAL TODAY" variant="outlined" />
              </Box>
              <div className={styles.image}>
                <Image className={styles.pulse} src={Pulse} width={260} alt="pulse"/>
                <Image className={styles.timer} src={Timer} width={260} alt="timer"/>
              </div>
            </Stack>
            <Stack className={styles.buttonZone} spacing={6} direction="row">
              <Button variant="outlined">100-120</Button>    
              <Button variant="outlined">120-140</Button>
              <Button variant="outlined">140-160</Button>
              <Button variant="outlined">160-180</Button>
            </Stack>   
            <Stack className={styles.buttonTime} spacing={6} direction="row">
              <Button variant="outlined">TIME</Button>    
              <Button variant="outlined">TIME</Button>
              <Button variant="outlined">TIME</Button>
              <Button variant="outlined">TIME</Button>
            </Stack>
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