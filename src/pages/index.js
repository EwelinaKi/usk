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
    <Box recommendations={data.recommendations}/>
    <Awards
      planeImg={data.planeImg.childImageSharp}
      award1={data.award1.childImageSharp}
      award2={data.award2.childImageSharp}
      award3={data.award3.childImageSharp}
    />
  </Layout>
)

export const query = graphql`
    query {
        recommendations: allRecommendationsJson {
            nodes {
                id
                name
                opinion
                image
                rate
            }
        }
        planeImg: file(relativePath: { eq: "plane.jpg" }) {
            childImageSharp {
                fluid (maxWidth: 500){
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcWebp
                    srcSetWebp
                    sizes
                    presentationWidth
                    presentationHeight
                }
            }
        }
        award1: file(relativePath: { eq: "aw1.png" }) {
            childImageSharp {
                fluid (maxWidth: 200){
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcWebp
                    srcSetWebp
                    sizes
                    presentationWidth
                    presentationHeight
                }
            }
        }
        award2: file(relativePath: { eq: "aw2.png" }) {
            childImageSharp {
                fluid (maxWidth: 200){
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcWebp
                    srcSetWebp
                    sizes
                    presentationWidth
                    presentationHeight
                }
            }
        }
        award3: file(relativePath: { eq: "aw3.png" }) {
            childImageSharp {
                fluid (maxWidth: 200){
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcWebp
                    srcSetWebp
                    sizes
                    presentationWidth
                    presentationHeight
                }
            }
        }
        
    }
`
