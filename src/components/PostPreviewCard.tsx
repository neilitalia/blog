import React from 'react'
import { Link } from "gatsby"
import { PostPreviewCardProps } from '../types'

const PostPreviewCard: React.FC<PostPreviewCardProps> = ({ excerpt, frontmatter, fields, id }) => {
  return (
    <div key={id} className="max-w-xs">
      <Link to={fields.slug}>
        <h2 className="text-3xl font-bold underline text-amber-400">{frontmatter.title}</h2>
      </Link>
      <p>{frontmatter.date}</p>
      <p>{excerpt}</p>
    </div>
  )
}

export default PostPreviewCard
