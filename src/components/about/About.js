import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Persons from './Persons'
import Accordion from './Accordion'

function About() {
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
      <div className="aboutTheatre__column" style={{marginBottom: 10}}>
        <div className="leftColumn">
          <p>О нас</p>
        </div>
        <div className="rightColumn">
          <p className="infoName">Красноярское<br />региональное<br />отделение<br />общественной<br />организации союз<br />театральных деятелей<br />Российской Федерации<br />(Всероссийское<br />театральное общество)</p>
        </div>
      </div>
      {textabout.allMarkdownRemark.nodes.map((about, index) => {
        const { frontmatter, html } = about;


        return (
          <div className="aboutTheatre__column" key={index}>
            <div className="leftColumn">
              <p>- {index + 1}.</p>
            </div>
            <div className="rightColumn">
              <Accordion html={html} title={frontmatter.title}/>
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
