import React from 'react';
import './../App.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>POC</h2>
      <div className="nav-links">
        <Link to={`/one`} className="link">One</Link>
        <Link to={`/two`} className="link">Two</Link>
        <Link to={`/three`} className="link">Three</Link>
        <Link to={`/four`} className="link">Four</Link>
        <Link to={`/five`} className="link">Five</Link>
        <Link to={`/six`} className="link">Six</Link>
      </div>
    </nav>
  )
}

export default Nav;