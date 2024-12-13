import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">description</Link></li>
        <li><Link to="/skecth">sketch</Link></li>
        <li><Link to="/mockup">mockup</Link></li>
        <li><Link to="/flowdiagram">flow diagram</Link></li>
        <li><Link to="/logbook">logbook</Link></li>
        <li><Link to="/game">game</Link></li>
        <li><Link to="/forms">forms</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
