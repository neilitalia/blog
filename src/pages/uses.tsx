import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Layout from "../components/Layout"

const About = () => {
  const { title, description } = useSiteMetadata()
  return (
    <Layout>
      <h1>Welcome to {title}</h1>
      <p>About: {description}</p>
    </Layout>
  )
}

export default About
