import React from "react"
import Magnifier from "react-magnifier"
import keyboard from "../../static/images/keyboard.jpg"
import keyboardStyles from "../styles/keyboard.module.css"

export default () => (
  <div className={keyboardStyles.keyboard}>
    <Magnifier
      src={keyboard}
      width={"100%"}
      mgShowOverflow={false}
      alt="Ultimate Scala Keyboard big photo"/>
  </div>
)
