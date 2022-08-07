
import Link from "next/link";
import Header from './components/Header';
import styles from "../styles/Home.module.css";

const Users = ({users}) => {
  return (
    <>
      <Header keywords={users} />
      <div className={styles.container}>
           <h1 className={styles.users}>Користувачі</h1>
        <ul >
          {users.map(user =>
          <li key={user.id} >
            <Link href={`/users/${user.id}`}>
              <a className={styles.a}>{user.name}</a>
            </Link>
          </li>
          )}
        </ul>
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