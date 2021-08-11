import React from 'react'
import { Link } from "gatsby"

function Title() {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1>Дом<br /><span>Актёра</span></h1>
        <h2>Союз театральных<br/>деятелей российской<br/>федерации (всероссийское<br/>театральное общество)</h2>
        <p>// Наш Дом являлся и является по сей день одним из лучших в стране среди театральных организаций и занимает 7 место по численности среди 77-ми отделений Союза театральных деятелей России.</p>
      </div>
      <div className="banner__links">
        <Link to="/events">Что посмотреть?</Link>
        <p>О нас</p>
        <p>Контакты</p>
      </div>
    </div>
  )
}

export default Title