import React, { useState } from 'react'
import { Link } from "gatsby"
import Contact from '../Contact';
import { IoMenu } from "react-icons/io5";

function Menu() {
  const [contact, setContact] = useState(false);
  return (
  <>
    <nav className="menu">
      <div className="menu__button" onClick={() => {setContact(contact ? false : true)}}>
        <IoMenu />
      </div>
      <Link to="/events" className="menu__events" style={contact ? {transform: 'translateX(100%)'} : null}>все события</Link>
    </nav>
    {contact && (
      <Contact />
    )}
  </>
  )
}

export default Menu
