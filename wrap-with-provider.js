import React from "react"
import { Provider } from "react-redux"
import createStore from "./src/store/index"

export default ({ element }) => {
  return <Provider store={createStore}>{element}</Provider>
}