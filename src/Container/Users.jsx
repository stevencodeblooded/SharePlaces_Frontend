import React, { Suspense } from 'react'

import { Await, defer, useLoaderData } from 'react-router-dom'
import UserCard from '../Components/Users/UserCard'
import Loader from '../Shared/Loader/Loader'

export async function loader() {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users')
  const dataPromise = response.json()

  return defer({dataUsers: dataPromise}) //object
}

const Users = () => {
  const usersData = useLoaderData()
  return (
    <div className='users'>
      <Suspense fallback={<Loader />}>
        <Await resolve={usersData.dataUsers}>
          {
            (loadedUsers) => {
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