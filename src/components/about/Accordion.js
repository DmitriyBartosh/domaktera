import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoAddOutline } from "react-icons/io5";

function Accordion(props) {
  const [active, setActive] = useState(false)
  return (
    <>
      <button className="infoTitle pointer" onClick={() => setActive(!active)}><p>{props.title}</p><IoAddOutline style={active ? { transform: 'rotateZ(45deg)' } : { transform: 'rotateZ(0deg)' }} /></button>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 50, height: 0 }}
            className="infoDescription"
            dangerouslySetInnerHTML={{ __html: props.html }}
          />)
        }
      </AnimatePresence>
    </>
  )
}

export default Accordion
