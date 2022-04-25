import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (clearUser) => {
  return (
    <nav>
    <ul className="navBar">
        <li className="navBar_item">
          <Link className={`navbar__link`} to="/">  Comics </Link>
        </li>
        <li className="navBar_item item_left">
          <Link className={`navbar__link`} to="/favorites">  Favorites </Link>
        </li>
        <li className="navBar_item item_left">
        {sessionStorage.getItem("corridorcomics_user") != null ? <Link className="navbar__link" to="/login" onClick={clearUser}> Logout </Link> : ''}
        </li>
      </ul>
    </nav>
  )
}
