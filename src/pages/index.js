import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  )
}

export default Home
