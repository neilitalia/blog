import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/Layout'

const Error404Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Oopsie!</h1>
      <h3>Error: 404</h3>
      <p>Nothing's here.</p>
    </Layout>
  )
}

export default Error404Page
