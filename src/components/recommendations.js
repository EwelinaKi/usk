import React from "react"
import { Card, Carousel } from "react-bootstrap"

export default (props) => (
  <Carousel>
    {props.recommendations.map(recommendation =>
      (
        <Carousel.Item key={recommendation.id}>
          <Card style={{ width: "20rem" }}>
            {/*<Card.Img variant="top" src={}/>*/}
            <Card.Body>
              <Card.Title>{recommendation.name}</Card.Title>
              <span role="img" aria-label="rate">{recommendation.rate}</span>
              <Card.Text>
                {recommendation.opinion}
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ),
    )}
  </Carousel>
)
