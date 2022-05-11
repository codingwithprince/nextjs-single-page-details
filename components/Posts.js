import React, {useEffect, useState} from 'react'
import PostDetails from './PostDetails';
// import { PostDetails } from './PostDetails'

const Posts = ({posts}) => {

  return (
    <div>
        <h3 className='text-2xl font-bold text-center py-5'>This is post page</h3>
        <div className="post-details grid grid-cols-5 justify-items-center">
          {
            posts.map(data => <PostDetails key={data.id} data={data}/>)
          }
        </div>
    </div>
  )
}

export default Posts;