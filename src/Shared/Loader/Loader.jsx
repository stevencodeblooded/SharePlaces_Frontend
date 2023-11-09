import BounceLoader from 'react-spinners/BounceLoader'

const Loader = () => {
  return (
    <div className='loader'>
        <BounceLoader 
            color='#FFD700'
        />
        <h1>Loading Users...</h1>
    </div>
  )
}

export default Loader