import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Breakthrough1000</title>
				<link rel="icon" href="/beating-heart.gif" />
			</Head>
			<Header />
			<main className={styles.main}>
				<h1 className={styles.title}></h1>
				<p className={styles.description}>
				</p>
			</main>
		</div>
	);
}
