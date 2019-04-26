import React from "react"
import { Col, Row } from "react-bootstrap"
import footerStyles from "../styles/footer.module.css"

export default () => (
  <div className={footerStyles.box}>
    <Row>
      <Col>
        <h5>My</h5>
        <a href="http://github.com" className={footerStyles.link}>
          <img src="/svg/github.svg" alt="github logo" className={footerStyles.svgLogo}/>
          Github
        </a>
        <br/>
        <a href="http://github.com" className={footerStyles.link}>
          <img src="/svg/li.svg" alt="linkedin logo" className={footerStyles.svgLogo}/>
          LinkedIn
        </a>
      </Col>
      <Col>
        <h5>Attributions</h5>
        Awards free Vectors by <a rel="nofollow" href="https://www.vecteezy.com"
                                  className={footerStyles.link}>Vecteezy!</a>
        <br/>
        Plane photo by <a rel="nofollow" href="https://www.pexels.com/photo/photo-of-airplane-with-smoke-trail-2088203/"
                          className={footerStyles.link}>eberhard grossgasteiger</a>
        <br/>
        Keyboard photo by <a rel="nofollow"
                             href="https://www.pexels.com/photo/apple-background-desk-electronics-399161/"
                             className={footerStyles.link}>
        Lum3n.com</a>
        <br/>
        Very complicated formula <a rel="nofollow"
                                    href="http://www.luigip.com/?p=200"
                                    className={footerStyles.link}>
        Luigip.com</a>
      </Col>
    </Row>
  </div>
)
