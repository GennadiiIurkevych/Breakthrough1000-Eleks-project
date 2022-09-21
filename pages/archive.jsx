import React from 'react'
import Cards from "./cards";
import styles from "../styles/Home.module.css";
import Header from '../src/components/Header';
import Head from "next/head";

function Archive({cards}) {
  return (
    <>
      <Header />
			<div className={styles.container}>	
				<Head>
					<title>Breakthrough1000</title>
					<link rel="icon" href="/beating-heart.gif" />
				</Head>
				<Cards cards={cards} />
			</div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards = await response.json();

  if (!cards) {
    return {
      notFound: true,
    }
  }

  return {
    props: { cards: cards },
  }
};

export default Archive;