import * as React from "react"
import Layout from '../layouts/Layout'
import Main from '../components/main/Main'

const IndexPage = () => {

  return (
    <Layout blockClass="mainPage">
      <div className="intro">
        <Main />
      </div>
    </Layout>
  )
}

export default IndexPage
