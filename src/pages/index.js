import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

import Layout from "../components/layout"
import indexStyles from "../styles/index.module.css"
import bcgImage from "../../static/images/keyboard-bcg.jpg"

export default () => (

  <Layout>
    <div className={indexStyles.banner}>
      {/*<img className={indexStyles.bcgImage} src={bcgImage} alt="Background image"/>*/}
      <p className={indexStyles.phrases}>What a world.</p>
    </div>
  </Layout>

)
