import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "../types"
import PostPreviewCard from "../components/PostPreviewCard"
import NavBar from "../components/NavBar"

const Home: React.FC<PageProps> = ({ data }) => {
  return (
    <div className="flex flex-col bg-darkTeal text-amber-100 min-h-screen">
      <NavBar />
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline text-amber-400">{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
      </header>

      <main className="flex flex-col justify-center items-center">
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <PostPreviewCard excerpt={excerpt} frontmatter={frontmatter} fields={fields} id={id}/>
        ))}
      </main>
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
          date(formatString: "dddd, MMMM DD, YYYY", locale: "en-US")
        }
        fields {
          slug
        }
      }
    }
  }
`
