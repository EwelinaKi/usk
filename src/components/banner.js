import React from "react"
import bannerStyles from "../styles/banner.module.css"
import Img from "gatsby-image"

export default (props) => (

  <div className={bannerStyles.banner}>
    <Img
      fluid={props.keyboardImg.fluid}
      alt="scala keyboard"
      className={bannerStyles.bannerImg}/>
    <div className={bannerStyles.phrases}>
      {props.features.nodes.map(element =>
        (
          <p key={element.id}>{element.feature}</p>
        ),
      )}
    </div>
  </div>
)
