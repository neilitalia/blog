import React from 'react'
import { PostTagsProps } from '../types'

const PostTags:React.FC<PostTagsProps> = ({ tags }) => {
  return (
    <div className="hidden md:flex md:flex-row">
      {tags.map((tag, i)=>(
          <p key={i} className="font-serif mr-2">#{tag}</p>
      ))}
    </div>
  )
}

export default PostTags
