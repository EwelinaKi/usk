import React from "react"
import bannerStyles from "../styles/banner.module.css"
import Img from "gatsby-image"

export default (props) => (

  <div className={bannerStyles.banner}>
    <Img fluid={props.keyboardImg.fluid} alt="scala keyboard" className={bannerStyles.bannerImg}/>
    <div className={bannerStyles.phrases}>
      <p>Stress pad</p>
      <p>Lightened</p>
      <p>Extraordinary</p>
      <p>Tailored</p>
      <p>Perfect</p>
    </div>
  </div>
)
