import React from 'react';
import MyPDF from '../files/ncunanan-resume-2020.pdf';


function Resume() {
  
  return (
    <div>
      <h1>resume</h1>
      <p>Download my<a href={MyPDF} download="My_File.pdf">resume. </a></p>
      
      <section>
        <h5>Front-End Proficiencies:</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section>
        <h5>Back-End Proficiencies:</h5>
        <ul className="proficiencies">
          <li>APIs</li>
          <li>Node JS</li>
          <li>Express</li>
          <li>mySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>React</li>
        </ul>
      </section>
    </div>
  )
}

export default Resume;