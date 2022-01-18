import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import GlobalCSS from "./css/global.css"
import App from "./view/App"

const Main = function () {
  return (
    <Router>
      <GlobalCSS />
      <App />
    </Router>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"))
