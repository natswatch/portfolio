import React from 'react';
import photo from '../../images/about-1.jpg'

function About() {
  return (
    <section>
      <div>
        <h2 id="about">about me</h2>
        <p>I am a working student based out of San Francisco. </p>
        <img src={photo} alt="my portrait" title="hover text" width="300"/>
      </div>
    </section>
  )
};

export default About;