import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostPage: React.FC<Props> = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  )
}

export default PostPage

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "dddd, MMMM DD, YYYY", locale: "en-US")
      }
    }
  }
`

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    },
    allMdx: {
      nodes: [{
        excerpt: string,
        frontmatter: {
          date: string
          title: string
        },
        fields: {
          slug: string
        }
      }]
    },
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        date: string
      }
    }
  }
}

