import { useRouter } from "next/router";
import styles from '../styles/users.module.scss';
import Header from './Header';

export default function User({user}) {
  const {query} = useRouter()

  return (
    <Header keywords={user.name}>
      <div className={styles.user}>
        <h1>Користувач з id {query.id}</h1>
        <div>Імя користувача - {user.name}</div>
      </div>
    </Header>
  )
};

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
    return {
      props: {user},
    }
}