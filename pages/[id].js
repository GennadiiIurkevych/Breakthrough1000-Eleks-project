import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

import Header from './components/Header';

export default function User({user}) {
  const {query} = useRouter()
  return (
    <>
      <Header keywords={user.name} />
      <div className={styles.container}>
        <h1 className={styles.users}>Користувач з id {query.id}</h1>
        <div>Імя користувача - {user.name}</div>
      </div>
    </>
  )
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
    return {
      props: {user},
    }
}