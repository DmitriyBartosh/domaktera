import React from 'react'
import { Link } from "gatsby"

function Title() {
  return (
    <div className="banner">
      <div className="banner__title">
        <h1>Союз<br />театральных<br />деятелей<br />российской<br />федерации</h1>
        <p>Наш Дом являлся и является по сей день одним из лучших в стране среди театральных организаций и занимает 7 место по численности среди 77-ми отделений Союза театральных деятелей России.</p>
      </div>
      <div className="banner__links">
        <Link to="/events">Что посмотреть?</Link>
        <p>Новости</p>
        <p>О нашем доме</p>
      </div>
    </div>
  )
}

export default Title