import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Logo from '../Logo'

function PersonPage(props) {
  return (
    <section className="personPage">
      <Logo />
      <div className="personPage__name">
        <h1 dangerouslySetInnerHTML={{ __html: props.name }} />
      </div>
      <div className="personPage__description">
        <p className="title">Краткая биография</p>
        {props.description.map((description, index) => {
          return <p key={index} dangerouslySetInnerHTML={{ __html: description }} />
        })}
      </div>
      <div className="personPage__portfolio">
        <div className="awards">
          <p className="title">Призы и награды</p>
          {props.awards.map((award, index) => {
            return <p key={index}>{award}</p>
          })}
        </div>
        <div className="works">
          <p className="title">Театральные работы</p>
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
