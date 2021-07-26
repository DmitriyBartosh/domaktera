import React from 'react'
import { Link } from "gatsby"

function Title() {
  return (
    <div className="banner">
      <div className="banner__title">
        <div className="line">
          <h1>Дом</h1>
        </div>
        <div className="line">
          <h1>Актёра</h1>
        </div>
        <p>Здесь не будет второго/пятого/ десятого дубля. У актёров нет права на ошибку, ведь в зале сидят зрители, которые заметят любую фальшь. И ожидать аплодисментов и оваций стоит тогда, когда игра действительно будет на уровне, и актер полностью вживётся в роль.</p>
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