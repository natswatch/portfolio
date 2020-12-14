import React from 'react';
import PhotoList from '../PhotoList';

const Portfolio = ({currentCategory}) => {
  console.log(currentCategory);
  return (
    <section>
      
      
      <h1>{currentCategory}</h1>
      <PhotoList currentCategory={currentCategory}></PhotoList>
    
    </section>
  )
}

export default Portfolio;