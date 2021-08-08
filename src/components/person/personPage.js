import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Logo from '../Logo'

function PersonPage(props) {
  return (
    <section className="personPage">
      <Logo />
      <div className="personPage__name">
        <h1>{props.name}</h1>
      </div>
      <div className="personPage__description">
        {props.description.map((description, index) => {
          return <p key={index}>{description}</p>
        })}
      </div>
      <div className="personPage__portfolio">
        <div className="awards">
          {props.awards.map((award, index) => {
            return <p key={index}>{award}</p>
          })}
        </div>
        <div className="works">
          {props.works.map((work, index) => {
            return <p key={index}>{work}</p>
          })}
        </div>
        <div className="photo">
          <GatsbyImage image={props.photo} alt={props.name} />
        </div>
        <div className="caption">
          <p>{props.caption}</p>
        </div>
      </div>
    </section>
  )
}

export default PersonPage
