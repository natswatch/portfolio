import React from 'react';

function Nav() {

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <span>portfolio</span>
        </li>
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