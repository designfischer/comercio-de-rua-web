import React from "react";
import { NavLink } from "react-router-dom";

import './style.css'

function Nav() {
  return (
    <header className="main-nav">
      <div className="main-nav-logo">
        <h2>COMÉRCIO DE RUA</h2>
      </div>
      <nav className="main-nav-links">
        <ul>          
          <li>
            <NavLink to="/auth">ENTRAR</NavLink>
          </li>
          <li>
            <NavLink to="/products">PRODUTOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
