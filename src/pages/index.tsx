import React from "react"
import { graphql } from "gatsby"
import { HomePageProps } from "../types"
import NavBar from "../components/NavBar"
import PostPreviewCard from "../components/PostPreviewCard"

const Home: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div>
      <NavBar />

      <header className="flex flex-col justify-center items-center my-20">
        <h1 className="text-3xl font-bold underline text-amber-400">{data.site.siteMetadata.title}</h1>
        <p className="font-serif">{data.site.siteMetadata.description}</p>
      </header>

      <div className="flex flex-col justify-center items-center">
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <PostPreviewCard excerpt={excerpt} frontmatter={frontmatter} fields={fields} id={id}/>
        ))}
      </div>
    </div>
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
