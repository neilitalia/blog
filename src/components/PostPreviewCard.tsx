import React from 'react'
import { Link } from "gatsby"
import { PostPreviewCardProps } from '../types'
import PostTags from './PostTags'

const PostPreviewCard: React.FC<PostPreviewCardProps> = ({ excerpt, frontmatter, fields, id }) => {
  return (
    <div key={id} className="mb-11">
      <Link to={frontmatter.slug ? frontmatter.slug : fields.slug} className="decoration-2 underline-offset-2">
        <h2 className="text-3xl font-bold underline text-amber-400">{frontmatter.title}</h2>
      </Link>
      <p className="font-serif">{excerpt}</p>
      <div className="flex flex-row">
        <p className="font-serif">{fields.readingTime.text}</p>
        <p className="mx-5">&#9702;</p>
        <p className="font-serif">{frontmatter.date}</p>
        {frontmatter.tags && <p className="mx-5 hidden md:flex">&#9702;</p>}
        {frontmatter.tags && <PostTags tags={frontmatter.tags}/>}
      </div>
    </div>
  )
}

export default PostPreviewCard
