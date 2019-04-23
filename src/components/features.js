import React from "react"
import featuresStyles from "../styles/features.module.css"

export default (props) => {
  return (
    <div className={featuresStyles.featuresSection}>
      {props.features.nodes.map(element =>
        (
          <div key={element.id} className={featuresStyles.featureRow}>
            <div className={featuresStyles.featureName}>
              <p>{element.feature}</p></div>
            <div className={featuresStyles.featureDesc}>
              <p>{element.description}</p></div>
          </div>
        ),
      )}
    </div>
  )
}
