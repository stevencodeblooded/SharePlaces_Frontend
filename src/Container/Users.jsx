import React from 'react'

import {  useLoaderData } from 'react-router-dom'
import UserCard from '../Components/Users/UserCard'

export async function loader() {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users')
  const data = await response.json()

  return data
}

const Users = () => {
  const usersData = useLoaderData()
  console.log('usersData --- ',usersData);
  return (
    <div className='users'>
      <UserCard users={usersData} />
    </div>
  )
}

export default Users