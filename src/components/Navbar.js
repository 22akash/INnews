import React, { Component } from 'react'
// import About from './About';
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div><ul className="nav nav-tabs fixed-top bg-dark">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">BUSINESS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">HEALTH</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">SCIENCE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">SPORTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">TECHNOLOGY</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" >ABOUT</Link>
        </li>

      </ul>
      </div>
    )
  }
}

export default Navbar