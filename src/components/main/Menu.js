import React from 'react'
import { Link } from "gatsby"
import { IoMenu } from "react-icons/io5";

function Menu() {
  return (
  <>
    <nav className="menu">
      <div className="menu__button">
        <IoMenu />
      </div>
      <Link to="/events" className="menu__events">все события</Link>
    </nav>
    <div className="">

    </div>
  </>
  )
}

export default Menu
