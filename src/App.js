import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const categories = ["projects", "photography"];
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  
  return (
    <div>
      <Header 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        ></Header>
      <main>
        {!contactSelected && !resumeSelected && !aboutSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
          </>
        ) : !contactSelected && !aboutSelected ? (
          <Resume></Resume>
        ): !aboutSelected ? (
          <ContactForm></ContactForm>
        ): (
        <About></About>)}
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
