import React from "react"
import { graphql } from "gatsby"
import { HomePageProps } from "../types"
import PostPreviewCard from "../components/PostPreviewCard"
import Layout from "../components/Layout"

const Home: React.FC<HomePageProps> = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col">
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <PostPreviewCard excerpt={excerpt} frontmatter={frontmatter} fields={fields} id={id}/>
        ))}
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMM DD, YYYY", locale: "en-US")
          tags
        }
        fields {
          slug
          readingTime {
            text
          }  
        }
      }
    }
  }
`
