import React from "react"
import awardsStyles from "../styles/awards.module.css"
import { Col, Row } from "react-bootstrap"
import Img from "gatsby-image"


export default (props) => {
  return (
  <div className={awardsStyles.awards}>
    <h2>We have been awarded by</h2>
    <Row>
      <Col lg={3} md={6} xs={12}>
        <Img
          fluid={props.planeImg.fluid}
          alt="Airplane on the sky"
          className={awardsStyles.planeImg}/>
      </Col>

      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <Img
          className={awardsStyles.awardImg}
          fluid={props.award1.fluid}
          alt="Satisfaction Guarantee Award"
        />
        <h3>Satisfaction Guarantee</h3>
        <p>Thanks to Scala Magazine.</p>
      </Col>

      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <Img
          fluid={props.award2.fluid}
          alt="Best Choice Award"
          className={awardsStyles.awardImg}
        />
        <h3>Best Choice</h3>
        <p>Honor from Scala Lovers Community.</p>
      </Col>

      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <Img
          className={awardsStyles.awardImg}
          fluid={props.award3.fluid}
          alt="Premium Quality Award"
        />
        <h3>Premium Quality</h3>
        <p>From ours beloved clients!</p>
      </Col>
    </Row>
  </div>
)
}
