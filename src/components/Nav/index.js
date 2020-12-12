import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
} = props;

  return (
    <nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory === category && !contactSelected && 'navActive'}`} key={category}>
            <span onClick={() => {
              setCurrentCategory(category);
              setContactSelected(false);
            }}>
              {category}
            </span>
          </li>
        ))}
        <li className="mx-2">
            <a href="#about">about me</a>
        </li>
        <li className="mx-2">
            <span onClick={() => setContactSelected(true)}>contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;