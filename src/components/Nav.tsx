import React from 'react';
import './../App.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h2>POC</h2>
      <div className="nav-links">
        <Link to={`/difference-of-perspective`} className="link">One</Link>
        <Link to={`/operations`} className="link">Two</Link>
        <Link to={`/data-content-owner`} className="link">Three</Link>
        <Link to={`/node`} className="link">Four</Link>
        <Link to={`/concepts-and-qualifiers`} className="link">Five</Link>
        <Link to={`/statistics`} className="link">Six</Link>
      </div>
    </nav>
  )
}

export default Nav;