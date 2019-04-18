import React from "react"
import { Col, Row } from "react-bootstrap"
import Recommendations from "./recommendations"
import Buy from "./buy"
import boxStyles from "../styles/box.module.css"

export default () => (
  <div className={boxStyles.box}>
    <Row>
      <Col md={6} sm={12} className={boxStyles.recommendations}>
        <Recommendations/>
      </Col>
      <Col md={6} sm={12} className={boxStyles.buy}>
        <Buy/>
      </Col>
    </Row>
  </div>
)
