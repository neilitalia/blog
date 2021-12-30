import React from "react"
import { graphql, Link } from "gatsby"
import { PageProps } from "../types"

const Home: React.FC<PageProps> = ({ data }) => {
  console.log(data)
  return (
    <div className="flex flex-col bg-darkTeal text-amber-100 min-h-screen">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline text-amber-400">{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
      </header>

      <main className="flex flex-col justify-center items-center">
        {data.allMdx.nodes.map(({ excerpt, frontmatter, fields, id }) => (
          <div key={id} className="max-w-xs">
            <Link to={fields.slug}>
              <h2 className="text-3xl font-bold underline text-amber-400">{frontmatter.title}</h2>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </div>
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
