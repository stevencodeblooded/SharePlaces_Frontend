import React from 'react'

import UserCard from '../Components/Users/UserCard'
import { useLoaderData } from 'react-router-dom'

console.log(process.env.REACT_APP_BACKEND_URL); //http://localhost:5000/api ! https://shareplacesbackend.onrender.com/api

export async function loader() {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users')
  const data = await response.json()

  return data
}

const Users = () => {
  const usersData = useLoaderData()
  return (
    <div className='users'>
      <UserCard users={usersData}/>
    </div>
  )
}

export default Users