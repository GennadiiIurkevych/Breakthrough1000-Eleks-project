import Link from "next/dist/client/link";
import styles from '../../styles/Header.module.scss';

  export default function A({text, href, onClick}) {

  return (
    <Link  href={href}>
      <a className={styles.link} onClick={onClick}>{text}</a>
    </Link>
  )
}
