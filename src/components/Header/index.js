import React from 'react';
import Nav from '../Nav';
import icon from '../icons/icon-1.png'

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
    resumeSelected,
    setResumeSelected,
    aboutSelected,
    setAboutSelected
  } = props;

  return (
    <header>
      <h1>
      <a href="#home"><img src={icon} alt="briefcase" width="18%"/> Nathalie</a>
      </h1>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        ></Nav>
        
    </header>
  );
}

export default Header;