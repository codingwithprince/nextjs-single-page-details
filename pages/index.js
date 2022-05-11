import Head from 'next/head'
import Posts from '../components/Posts'


export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Next Js Single Page App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='text-4xl font-bold underline py-5 text-center'>
          Welcome to Post
        </h1>
        {/* --- post --- */}
        <Posts posts={data} />
      </main>
    </div>
  )
}
