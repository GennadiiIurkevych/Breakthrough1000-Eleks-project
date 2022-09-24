import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeaderUA from "../src/components/HeaderUA";


export default function HomeUA({ cards }) {
		return (
		<>
			<HeaderUA />
			<div className={styles.container}>	
				<Head>
					<title>ПРОРИВ1000</title>
					<link rel="icon" href="/beating-heart.gif" />
				</Head>
			</div>
		</>
	);
}
