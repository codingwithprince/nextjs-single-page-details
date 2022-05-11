import Link from 'next/link'
import React from 'react'

const PostDetails = ({data}) => {
  return (
    <div className="postDetails shadow-sm">
      <div className='w-[300px] grid gap-4 p-2 m-2 border-2 border-blue-700'>
        <span className='text-lg uppercase font-bold'>{data.title}</span>
        <p className='text-lg font-mono text-red-500'>User ID: {data.userId}</p>
        <Link href={`/details/${data.id}`} passHref>
         <button className='bg-blue-600 py-2 px-3 rounded-sm text-white font-bold'>More Details</button>
        </Link>
      </div>
    </div>
  )
}
export default PostDetails;
