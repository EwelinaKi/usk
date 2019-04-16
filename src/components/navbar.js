import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar } from "react-bootstrap"
import navbarStyles from "../styles/navbar.module.css"

export default () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/" className={navbarStyles.logo}>Scala Ultimate Keyboard</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} className={navbarStyles.link} to="/about/">About me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

