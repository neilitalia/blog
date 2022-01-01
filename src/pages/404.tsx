import React from 'react'
import { PageProps } from 'gatsby'

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
