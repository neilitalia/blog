import React from 'react'
import { graphql, PageProps } from "gatsby"
import NavBar from './NavBar'

const Layout: React.FC<PageProps> = ({children, data}) => {
  return (
    <div className="flex flex-col text-amber-100 min-h-screen bg-gradient-to-b from-darkestBlue to-darkTeal">
      <NavBar />

      <header className="flex flex-col justify-center items-center my-20">
        <h1 className="text-3xl font-bold underline text-amber-400">{data.site.siteMetadata.title}</h1>
        <p className="font-serif">{data.site.siteMetadata.description}</p>
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
