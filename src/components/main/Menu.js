import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"
import Contact from '../Contact';
import { IoMenu, IoClose } from "react-icons/io5";

function Menu() {
  const [hideMenu, setHideMenu] = useState(false)
  const [contact, setContact] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if(window.scrollY >= 10){
        setHideMenu(true);
      }
      else{
        setHideMenu(false);
      }
    }

    window.addEventListener('scroll', hideMenu)
  }, [])
  return (
  <>
    <nav className={hideMenu ? "menu hide" : "menu"}>
      <button className={hideMenu ? "menu__button active" : "menu__button"} onClick={() => {setContact(contact ? false : true)}}>
        {contact ? <IoClose /> : <IoMenu />}
      </button>
      <Link to="/events" className={hideMenu ? "menu__events hide" : "menu__events"} style={contact ? {transform: 'translateX(100%)'} : null}>все события</Link>
    </nav>
    
    <Contact isVisible={contact}/>
  </>
  )
}

export default Menu
