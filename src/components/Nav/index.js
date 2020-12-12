import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
} = props;

  return (
    <nav>
      <ul className="flex-row">
        {categories.map((category) => (
          <li className={`mx-1 ${currentCategory === category && 'navActive'}`} key={category}>
            <span onClick={() => {
              setCurrentCategory(category);
            }}>
              {category}
            </span>
          </li>
        ))}
        <li className="mx-2">
            <a href="#about">about me</a>
        </li>
        <li className="mx-2">
            <span>contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;