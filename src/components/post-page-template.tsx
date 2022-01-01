import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { HomePageProps } from "../types"
import Layout from "./Layout"

const PostPage: React.FC<HomePageProps> = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
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
        date(formatString: "dddd, MMMM DD, YYYY", locale: "en-US")
      }
    }
  }
`
