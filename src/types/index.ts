export interface HomePageProps {
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
          date: Date
          title: string
        },
        fields: {
          slug: string,
          readingTime: {
            text: string
          },
          tags: string[]
        }
      }]
    },
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        date: Date
      }
    }
  }
}

export interface HeaderProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

export interface PostPreviewCardProps {
  id: string,
  excerpt: string,
  frontmatter: {
    date: Date
    title: string
    tags?: string[]
    slug?: string
  },
  fields: {
    slug: string,
    readingTime: {
      text: string
    }
  }
}
