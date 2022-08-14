
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

const Users = ({users}) => {
  return (
    <>
      <Header keywords={users} />
      <div className={styles.container}>
        <Variants />
        <div className={styles.diary}>
          <Stack spacing={2} direction="row">
            
            <Box className={styles.button}
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '40ch' },
             
            }}
            noValidate
            autoComplete="off"
            >
            <TextField className={styles.buttonData} id="outlined-basic"  label="DATA" variant="outlined" />  
            <TextField className={styles.buttonBody} id="outlined-basic"  label="BODY WEIGHT" variant="outlined" />
            <TextField className={styles.buttonBurn} id="outlined-basic"  label="YOU BURNED KCAL TODAY" variant="outlined" />
            </Box>
            <Image className={styles.pulse} src={Pulse} width={260} height={120} alt="pulse"/>
          </Stack>
          
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

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await response.json()
    return {
      props: {users},
    }
}