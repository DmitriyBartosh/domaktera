import * as React from "react"
import Layout from '../layouts/Layout'
import Title from '../components/Title'
import Posters from "../components/Posters"
import Menu from "../components/Menu"

const IndexPage = () => {

  return (
    <Layout blockClass="mainPage">
      <Title />
      <Posters />
      <Menu />
    </Layout>
  )
}

export default IndexPage
