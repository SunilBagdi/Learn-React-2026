import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])  
  // useEffect(() => {
  //   fetch('https://api.github.com/users/SunilBagdi')
  //   .then( response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <h1>Github followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <p className="pt-3">Name: {data.name}</p>
      <p className="pt-3">College Name: {data.company}</p>
      <p className="pt-3">BIO: {data.bio}</p>
      <p className="pt-3">Public Repositories: {data.public_repos}</p>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/SunilBagdi')
  return response.json()  
}

// yh function ke bhare likha jata hai 