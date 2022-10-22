import React from 'react'
import Cards from "./cards";
import styles from "../styles/Home.module.css";
import Header from '../src/components/Header';
import Head from "next/head";
import withLogin from '../src/hoc';
import Form from './Form';
import TodoItem from './TodoItem';
import User from './User';
import Posts from './Posts';
import { useSelector } from 'react-redux';


function Archive({cards}) {
  const todos = useSelector((state) => state.todo.todos)
  return (
    <>
      <Header />
			<div className={styles.container}>	
				<Head>
					<title>Breakthrough1000</title>
					<link rel="icon" href="/beating-heart.gif" />
				</Head>
				<Cards cards={cards} />
        <User />
        <Form />
        
          {
            todos?.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))
          }
        {/* <Posts /> */}
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

// export default Archive;
const WrappedAdvice = withLogin(Archive);
export default WrappedAdvice;