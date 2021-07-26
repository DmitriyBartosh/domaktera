import React from 'react'
import PropTypes from "prop-types"

import '../styles/main.scss'


function Layout({ children, blockClass,  }) {
  return (
    <main className={blockClass}>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
