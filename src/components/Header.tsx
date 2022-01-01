import React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header: React.FC = () => {
  const { title, description } = useSiteMetadata()
  return (
    <header className="flex flex-col justify-center items-center my-20">
      <h1 className="text-3xl font-bold underline text-amber-400">{title}</h1>
      <p className="font-serif">{description}</p>
    </header>
  )
}

export default Header