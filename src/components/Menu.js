import React from 'react'
import { Link } from "gatsby"

function Menu() {
  return (
  <>
    <nav className="menu">
      <div className="menu__button">

      </div>
      <Link to="/events" className="menu__events">
        <p>события</p>
      </Link>
    </nav>
    <div className="">

    </div>
  </>
  )
}

export default Menu
