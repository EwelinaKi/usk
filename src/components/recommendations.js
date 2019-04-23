import React from "react"
import { Card, Carousel } from "react-bootstrap"
import recommendationStyles from "../styles/recommendations.module.css"

export default (props) => (
  <Carousel>
    {props.recommendations.map(recommendation =>
      (
        <Carousel.Item key={recommendation.id}>
          <Card style={{ width: "20rem" }} className={recommendationStyles.cardAll}>
            <Card.Img variant="top" src={"images/" + recommendation.image} className={recommendationStyles.cardImg}/>
            <Card.Body>
              <Card.Title>{recommendation.name}</Card.Title>
              <span role="img" aria-label="rate">{recommendation.rate}</span>
              <Card.Text className={recommendationStyles.cardText}>
                {recommendation.opinion}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ),
    )}
  </Carousel>
)
