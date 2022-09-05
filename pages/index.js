import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<div className={styles.container}>	
				<Head>
					<title>Breakthrough1000</title>
					<link rel="icon" href="/beating-heart.gif" />
				</Head>
			</div>
		</>
	);
}
