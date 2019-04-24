import React from "react"
import buyStyles from "../styles/buy.module.css"
import { Button } from "react-bootstrap"

export default () => (
  <div className={buyStyles.buy}>
    <p>Oooh! Don't waste your time any more, we all know you want it!</p>
    <div className={buyStyles.buyButton}>
      <Button size="lg" type="button" className={buyStyles.buyButton} id="buyButton">Buy</Button>
      {/*<button type="button" className={"btn " + buyStyles.newPrimary}>Buy</button>*/}
    </div>
  </div>
)
