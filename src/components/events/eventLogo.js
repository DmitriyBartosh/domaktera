import { Link } from 'gatsby'
import React from 'react'

import LogoSvg from '../../images/logo/white.svg'

function eventLogo() {
  return (
    <div className="logoNav">
      <Link to="/">
        <img src={LogoSvg} alt="Логотип Дом Актёра"/>
      </Link>
      <div className="line" />
    </div>
  )
}

export default eventLogo
