import React from 'react';

const Portfolio = ({currentCategory}) => {
  
  const { name } = currentCategory;

  return (
    <section>
      <h1>{name}</h1>
    </section>
  )
}

export default Portfolio;