import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
      <header>
          <div className="header-bar">
              <h1><NavLink to="/" onClick={() => props.setFolderId(null)}>Noteful</NavLink></h1>
          </div>
      </header>  
  );
}

export default Header;