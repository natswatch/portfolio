import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header>
      <h1>
      <a href="#home">Nathalie</a>
      </h1>
      <Nav categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
    </header>
  );
}

export default Header;