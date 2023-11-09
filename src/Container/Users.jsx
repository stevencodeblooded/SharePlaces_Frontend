import React, { Suspense } from 'react'

import UserCard from '../Components/Users/UserCard'
import { Await, defer, useLoaderData } from 'react-router-dom'

export async function loader() {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users')
  const dataPromise = response.json()

  return defer({dataUsers: dataPromise}) //object
}

const Users = () => {
  const usersData = useLoaderData()
  return (
    <div className='users'>
      <Suspense fallback={<h1>Loading Users...</h1>}>
        <Await resolve={usersData.dataUsers}>
          {
            (loadedUsers) => {
              console.log(loadedUsers);
              return(
                <UserCard users={loadedUsers}/>
              )
            }
          }
        </Await>
      </Suspense>
    </div>
  )
}

export default Users