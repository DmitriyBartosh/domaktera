import * as React from "react"
import Layout from '../layouts/Layout'
import Main from '../components/main/Main'
import About from '../components/about/About'

const IndexPage = () => {

  return (
    <Layout blockClass="mainPage">
      <div className="intro">
        <Main />
      </div>
      <About />
    </Layout>
  )
}

export default IndexPage
