import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostPageTemplateProps } from "../types"
import Layout from "./Layout"

const PostPage: React.FC<PostPageTemplateProps> = ({ data }) => {
  const { frontmatter, body, fields } = data.mdx
  return (
    <Layout>
      <article className="prose prose-invert prose-amber prose-headings:text-amber-400 prose-p:text-amber-100 prose-p:font-serif prose-a:text-amber-400 hover:prose-a:text-amber-600">
        <h1>{frontmatter.title}</h1>
        <p>Published {frontmatter.date}</p>
        <p>{fields.readingTime.text}</p>
        <MDXRenderer>
          {body}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "en-US")
        tags
        cover
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
