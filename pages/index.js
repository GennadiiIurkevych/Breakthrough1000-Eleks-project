import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header";
import { Typography } from "@mui/material";


export default function Home({ cards }) {
		return (
		<>
			<Header />
			<div className={styles.container}>	
				<Head>
					<title>Breakthrough1000</title>
					<link rel="icon" href="/beating-heart.gif" />
				</Head>
				<Typography>Щось так не хоцця верстати, на сторінці advice є контент</Typography>
			</div>
		</>
	);
}
