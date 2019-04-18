import React from "react"
import recommendationsStyles from "../styles/recommendations.module.css"
import { Card, Carousel } from "react-bootstrap"
import boyImg from "../../static/images/boy.jpeg"
import girlImg from "../../static/images/girl.jpg"

export default () => (
  <Carousel className={recommendationsStyles.carouselBox}>
    <Carousel.Item>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={boyImg}/>
        <Card.Body>
          <Card.Title>Mark Twain</Card.Title>
          <span role="img" aria-label="5 stars">⭐⭐⭐⭐⭐</span>
          <Card.Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>
    <Carousel.Item>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={girlImg}/>
        <Card.Body>
          <Card.Title>Betty Spark</Card.Title>
          <span role="img" aria-label="5 stars">⭐⭐⭐⭐⭐</span>
          <Card.Text>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
    </Carousel.Item>
  </Carousel>
)
