import React from "react"
import awardsStyles from "../styles/awards.module.css"
import { Col, Row } from "react-bootstrap"
import planeImg from "../../static/images/plane.jpg"
import aw1Img from "../../static/images/aw1.png"
import aw2Img from "../../static/images/aw2.png"
import aw3Img from "../../static/images/aw3.png"


export default () => (
  <div className={awardsStyles.awards}>
    <h2>We have been awarded by</h2>
    <Row>
      <Col lg={3} md={6} xs={12}>
        <img src={planeImg} alt="Airplane on the sky" className={awardsStyles.planeImg}/>
      </Col>
      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <img
          className={awardsStyles.awardImg}
          src={aw1Img}
          alt="Satisfaction Guarantee Award"
        />
        <h3>Satisfaction Guarantee</h3>
        <p>Thanks to Scala Magazine.</p>
      </Col>

      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <img
          src={aw2Img}
          alt="Best Choice Award"
          className={awardsStyles.awardImg}

        />
        <h3>Best Choice</h3>
        <p>Honor from Scala Lovers Community.</p>
      </Col>

      <Col lg={3} md={6} xs={12} className={awardsStyles.awardCard}>
        <img
          className={awardsStyles.awardImg}
          src={aw3Img}
          alt="Premium Quality Award"
        />
        <h3>Premium Quality</h3>
        <p>From ours beloved clients!</p>
      </Col>
    </Row>
  </div>
)
