import React from 'react';
import photo from '../../images/about-1.jpg'

function About() {
  return (
    <section>
      <div>
        <h1 id="about">about me</h1>
        <p>I am a working student based out of San Francisco. </p>
        <img src={photo} alt="my portrait" width="300"/>
      </div>
    </section>
  )
};

export default About;