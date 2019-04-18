import React from "react"
import "bootstrap/dist/css/bootstrap.css"


import Layout from "../components/layout"
import Banner from "../components/banner"
import Features from "../components/features"
import Box from "../components/box"
import Keyboard from "../components/keyboard"
import Awards from "../components/awards"


export default () => (

  <Layout>
    <Banner/>
      <Features/>
      <Keyboard/>
      <Box/>
      <Awards/>
  </Layout>
)
