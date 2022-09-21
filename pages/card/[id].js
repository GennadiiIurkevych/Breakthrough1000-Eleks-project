import React from 'react'



const Card = ({ card }) => {
  return (
    <div>Card</div>
  )
}

export const getStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards = await response.json();

  const paths = cards.map(c => ({params: {id: c._id}}))

  return {paths, fallback: 'blocking'}
}

export const getStaticProps = async (params) => {
  const response = await fetch(`http://localhost:3000/api/cards/${params.id}`);
  const card = await response.json();

  return {
    props: {
      card
    },
    revalidate: 10
  }

}


export default Card