import React from 'react';
import Link from 'next/link'

export const getStaticPaths = async () =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json();

  const paths = data.map(cEl => {
    return{
      params:{
        details: cEl.id.toString()
      }
    }
  })
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) =>{
  const id = context.params.details;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    return{
      props:{
        data,
      }
    }
}

const detailsPage = ({data}) => {
  console.log(data);
  return (
    <div className="postDetails shadow-sm flex justify-center">
      <div className='w-[300px] grid gap-4 p-2 m-2 border-2 border-indigo-700'>
        <span className='text-lg uppercase font-bold'>{data.title}</span>
        <p className='text-lg font-mono text-red-500'>User ID: {data.userId}</p>
        <p>{data.body}</p>
        <Link href={'/'} passHref>
       <button className='bg-indigo-600 py-2 px-3 rounded-sm text-white font-bold'>Go Home</button>
      </Link>
      </div>
      
    </div>
  )
}

export default detailsPage