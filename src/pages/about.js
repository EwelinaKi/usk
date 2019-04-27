import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/about.module.css"

import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO
      title="About me | Ultimate Scala Keyboard"
      description="And now some short info about me."
    />
    <div className={aboutStyles.aboutBox}>
      <h1>About me</h1>
      <div className={aboutStyles.aboutText}>
        <p>I'm Ewelina and work as a front-end developer. My main interests are focused around Angular (6+) and React.
          I'm also familiar with node.js, express.js, npm and yarn. For testing I use Jasmine or Cypress. On a daily
          basis I work according to Scrum or Kanban practises.</p>
        <p>This site was built with
          <a rel="noopener noreferrer"
             href="https://www.gatsbyjs.org/"
             target="_blank"
             className={aboutStyles.aboutLink}> GatsbyJS
          </a>
          , a React based framework to build static websites. It also leverages
          <a rel="noopener noreferrer"
             href="https://graphql.org/"
             target="_blank"
             className={aboutStyles.aboutLink}> GraphQL </a>
          queries. Finally I used
          <a rel="noopener noreferrer"
             href="https://developers.google.com/web/tools/lighthouse/"
             target="_blank"
             className={aboutStyles.aboutLink}> Lighthouse </a>
          to introduce SEO best practises and to improve the quality of the page, especially around performance and
          a11y.</p>
        <p>I treated this site as a pet project to get a better understanding what Gatsby could be useful for and am
          quite satisfied. Among the assets I enjoyed most are loading images dependant on the screen size, seamless
          integration with GraphQL and an easy to grasp project structure enabling routing without any additional code
          as
          well as a modular way of building a website built on React components, to name just a few.</p>
        <p>It's hosted on
          <span> <a rel="nofollow"
                    href="https://github.com/EwelinaKi/usk/"
                    className={aboutStyles.aboutLink}>GitHub
          </a> </span>
          as a gh-pages project.</p>
        <p>If you have other suggestions than "Please, could you build this keyboard", feel free to catch me on LI or by
          email: kijanowska [at] gmail.com</p>
      </div>

    </div>
  </Layout>
)
