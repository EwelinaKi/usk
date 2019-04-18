import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Card, Carousel, Col, Row } from "react-bootstrap"

import Layout from "../components/layout"
import Banner from "../components/banner"
import indexStyles from "../styles/index.module.css"
import planeImg from "../../static/images/plane.jpg"
import aw1Img from "../../static/images/aw1.png"
import aw2Img from "../../static/images/aw2.png"
import aw3Img from "../../static/images/aw3.png"
import boyImg from "../../static/images/boy.jpeg"
import girlImg from "../../static/images/girl.jpg"

export default () => (

  <Layout>
    <Banner/>

    <div className={indexStyles.features}>
      <p>Stress pad <span>the main area, strong and resistant to pressure, acid and flames</span></p>
      <p>Circle mode <span>additional stress pad</span></p>
      <p>Lightened <span>no need to leave your cave of creativity</span></p>
      <p>Extraordinary <span>for the extraordinary masters of the universe</span></p>
      <p>Tailored <span>contains only needed keys, no fluff, no distraction</span></p>
    </div>

    <div className={indexStyles.box}>
      <Row>
        <Col lg={12} className={indexStyles.keyboard}>
          <p>keyboard photo</p>
        </Col>

        <Col md={6} sm={12} className={indexStyles.recommendations}>
          <Carousel className={indexStyles.carouselBox}>
            <Carousel.Item>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={boyImg}/>
                <Card.Body>
                  <Card.Title>Mark Twain</Card.Title>
                  <span role="img" aria-label="5 stars">⭐⭐⭐⭐⭐</span>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={girlImg}/>
                <Card.Body>
                  <Card.Title>Betty Spark</Card.Title>
                  <span role="img" aria-label="5 stars">⭐⭐⭐⭐⭐</span>
                  <Card.Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col md={6} sm={12} className={indexStyles.buy}>
          <p>Oooh! Don't waste your time any more, we all know you want it!</p>
          <div className={indexStyles.buyButton}>
            <Button  size="lg" type="button" className={indexStyles.buyButton}>Buy</Button>
          </div>
        </Col>
      </Row>
    </div>


    <div className={indexStyles.awards}>
      <h2>We have been awarded by</h2>
      <Row>
        <Col lg={3}  md={6} xs={12}>
          <img src={planeImg} alt="Airplane on the sky" className={indexStyles.planeImg}/>
        </Col>
        <Col lg={3}  md={6} xs={12} className={indexStyles.awardCard}>
          <img
            className={indexStyles.awardImg}
            src={aw1Img}
            alt="Satisfaction Guarantee Award"
          />
            <h3>Satisfaction Guarantee</h3>
            <p>Thanks to Scala Magazine.</p>
        </Col>

        <Col lg={3}  md={6} xs={12} className={indexStyles.awardCard}>
          <img
            src={aw2Img}
            alt="Best Choice Award"
            className={indexStyles.awardImg}

          />
            <h3>Best Choice</h3>
            <p>Honor from Scala Lovers Community.</p>
        </Col>

        <Col lg={3} md={6}  xs={12} className={indexStyles.awardCard}>
          <img
            className={indexStyles.awardImg}
            src={aw3Img}
            alt="Premium Quality Award"
          />
            <h3>Premium Quality</h3>
            <p>From ours beloved clients!</p>
        </Col>
      </Row>
    </div>
  </Layout>
)
