import React from 'react'

import {  useLoaderData } from 'react-router-dom'
import UserCard from '../Components/Users/UserCard'
// import Loader from '../Shared/Loader/Loader'

export async function loader() {
  const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/users')
  const dataPromise = await response.json()

  console.log('DataPromise here --- ', dataPromise);
  return dataPromise

  // return defer({dataUsers: dataPromise}) //object
}

const Users = () => {
  const usersData = useLoaderData()
  console.log('usersData --- ',usersData);
  return (
    <div className='users'>
      {/* <Suspense fallback={<Loader />}>
        <Await resolve={usersData.dataUsers}>
          {
            (loadedUsers) => {
              return(
                <UserCard users={loadedUsers}/>
              )
            }
          }
        </Await>
      </Suspense> */}
      <UserCard users={usersData} />
    </div>
  )
}

export default Users