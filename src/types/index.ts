export interface PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    },
    allMdx: {
      nodes: [{
        id: string,
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

