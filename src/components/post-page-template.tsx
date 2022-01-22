import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { PostPageTemplateProps } from "../types"
import Layout from "./Layout"
import PostTags from "./PostTags"

const PostPage: React.FC<PostPageTemplateProps> = ({ data }) => {

  const { frontmatter, body, fields } = data.mdx
  const src: ( string | boolean ) = frontmatter.featuredImage?.childImageSharp.fluid.src || false
  const alt: string = frontmatter.alt || "Placeholder Alt"

  return (
    <Layout>
      {src && <img src={src} alt={alt} className="w-full rounded-lg mb-7"/>}
      <article className="prose prose-invert prose-amber prose-headings:text-amber-400 prose-p:text-amber-100 prose-p:font-serif prose-a:text-amber-400 prose-code:text-teal-400 prose-pre:text-teal-400 hover:prose-a:text-amber-600 prose-li:font-serif marker:text-amber-400 marker:opacity-0">
        <h1 className="mb-0 text-6xl">{frontmatter.title}</h1>
        <div className="flex flex-row">
          <p>{frontmatter.date}</p>
          <p className="mx-5">&#9702;</p>
          <p>{fields.readingTime.text}</p>
          {frontmatter.tags && <p className="hidden mx-5 md:flex">&#9702;</p>}
          {frontmatter.tags && <PostTags tags={frontmatter.tags}/>}
        </div>
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
        date(formatString: "MMM D, YYYY", locale: "en-US")
        tags
        alt
        featuredImage {
          childImageSharp {
            fluid(jpegQuality: 90) {
              src
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
