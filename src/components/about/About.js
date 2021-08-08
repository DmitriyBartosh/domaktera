import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from 'framer-motion'
import { IoAddOutline } from "react-icons/io5";
import Persons from './Persons'

function About() {
  const [expanded, setExpanded] = useState(false);

  const textabout = useStaticQuery(graphql`
  {
    allMarkdownRemark(sort: {fields: frontmatter___title}) {
      nodes {
        id
        frontmatter {
          title
        }
        html
      }
    }
  }
`)


  return (
    <div className="aboutTheatre">
      <div className="aboutTheatre__column">
        <div className="leftColumn">
          <p>О нас</p>
        </div>
        <div className="rightColumn">
          <p className="infoName">Красноярское<br />региональное<br />отделение<br />общественной<br />организации союз<br />театральных деятелей<br />Российской Федерации<br />(Всероссийское<br />театральное общество)</p>
        </div>
      </div>
      {textabout.allMarkdownRemark.nodes.map((about, index) => {
        const { frontmatter, html } = about;
        const isOpen = index === expanded;

        return (
          <div className="aboutTheatre__column" key={index}>
            <div className="leftColumn">
              <p>- {index + 1}.</p>
            </div>
            <div className="rightColumn">
              <button className="infoTitle pointer" onClick={() => setExpanded(isOpen ? false : index)}>{frontmatter.title}<IoAddOutline style={isOpen ? {transform: 'rotateZ(45deg)'} : {transform: 'rotateZ(0deg)'}}/></button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                  initial={{opacity: 0, y: 20, height: 0}}
                  animate={{opacity: 1, y: 0, height: "auto"}}
                  exit={{opacity: 0, y: 50, height: 0}}
                  className="infoDescription" 
                  dangerouslySetInnerHTML={{ __html: html }} 
                  />)
                }
              </AnimatePresence>
            </div>
          </div>
        )
      })}

      <div className="aboutTheatre__column">
        <div className="leftColumn">
          <p>- 4.</p>
        </div>
        <div className="rightColumn">
          <p>Председатели</p>
        </div>
      </div>

      <Persons />
    </div>

  )
}

export default About
