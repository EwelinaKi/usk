import React from "react"
import awardsStyles from "../styles/awards.module.css"
import { Col, Row } from "react-bootstrap"
import Img from "gatsby-image"


export default (props) => {
  return (
    <div>
      <p className={awardsStyles.awardSection}>We have been awarded by</p>
      <Row>
        <Col lg={3} md={6} xs={12}>
          <Img
            fluid={props.planeImg.fluid}
            alt="Airplane on the sky"
          />
        </Col>

        <Col lg={3} md={6} xs={12} className={awardsStyles.awardCol}>
          <Img
            className={awardsStyles.awardImg}
            fluid={props.award1.fluid}
            alt="Satisfaction Guarantee Award"
          />
          <div className={awardsStyles.awardCard}>
            <p className={awardsStyles.awardName}>Satisfaction Guarantee</p>
            <p>Thanks to Scala Magazine.</p>
          </div>
        </Col>

        <Col lg={3} md={6} xs={12} className={awardsStyles.awardCol}>
          <Img
            fluid={props.award2.fluid}
            alt="Best Choice Award"
            className={awardsStyles.awardImg}
          />
          <div className={awardsStyles.awardCard}>
            <p className={awardsStyles.awardName}>Best Choice</p>
            <p>Honor from Scala Lovers Community.</p>
          </div>
        </Col>

        <Col lg={3} md={6} xs={12} className={awardsStyles.awardCol}>
          <Img
            className={awardsStyles.awardImg}
            fluid={props.award3.fluid}
            alt="Premium Quality Award"
          />
          <div className={awardsStyles.awardCard}>
            <p className={awardsStyles.awardName}>Premium Quality</p>
            <p>From ours beloved clients!</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
