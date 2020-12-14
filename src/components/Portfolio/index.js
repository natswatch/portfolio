import React from 'react';
import PhotoList from '../PhotoList';

const Portfolio = ({currentCategory}) => {
  console.log(currentCategory);
  return (
    <section>
      <h1>{currentCategory}</h1>
      <div>
      <PhotoList currentCategory={currentCategory}></PhotoList>
      </div>
    </section>
  )
}

export default Portfolio;