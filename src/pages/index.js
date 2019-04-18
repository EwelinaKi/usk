import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Features from "../components/features"
import Box from "../components/box"
import Keyboard from "../components/keyboard"
import Awards from "../components/awards"

export default ({ data }) => (

  <Layout>
    <Banner/>
      <Features/>
      <Keyboard/>
      <Box recommendations={data}/>
      <Awards/>
  </Layout>
)

export const query = graphql`
    query {
        allRecommendationsJson {
            nodes {
                id
                name
                opinion
                image
                rate
            }
        }
    }
`
