import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>HES-SO Vs - 64-31 - Web Development</h1>
      <nav>
        <ul>
          <li className="hamburger">
            <img
              src={process.env.PUBLIC_URL + "/ressources/images/hamburger_icon.svg"}
              alt="Hamburger Menu"
            />
          </li>
          <li>
            <Link to="/">Description</Link>
          </li>
          <li>
            <Link to="/sketch">Sketch</Link>
          </li>
          <li>
            <Link to="/mockup">Mockup</Link>
          </li>
          <li>
            <Link to="/flowdiagram">Flow</Link>
          </li>
          <li>
            <Link to="/logbook">Logbook</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
