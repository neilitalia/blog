import { PageProps } from 'gatsby'
import React from 'react'

const Error404Page: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Oopsie!</h1>
      <h3>Error: 404</h3>
      <p>Nothing's here.</p>
    </div>
  )
}

export default Error404Page
