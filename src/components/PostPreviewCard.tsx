import React from 'react'
import { Link } from "gatsby"
import { PostPreviewCardProps } from '../types'

const PostPreviewCard: React.FC<PostPreviewCardProps> = ({ excerpt, frontmatter, fields, id }) => {
  return (
    <div key={id} className="w-3/4 mb-11">
      <Link to={fields.slug} className="decoration-2 underline-offset-2">
        <h2 className="text-3xl font-bold underline text-amber-400">{frontmatter.title}</h2>
      </Link>
      <p className="font-serif">{frontmatter.date}</p>
      <p className="font-serif">{excerpt}</p>
    </div>
  )
}

export default PostPreviewCard