import React from "react"
import { Col, Row } from "react-bootstrap"
import styles from "../styles/footer.module.css"

export default () => (
  <div className={styles.box}>
    <Row>
      <Col>
        <h5>My</h5>
        <p>github</p>
        <p>linkedIn</p>
      </Col>
      <Col>
        <h5>Credentials</h5>
        <p>github</p>
        <p>linkedIn</p>
      </Col>
    </Row>
  </div>
)
