import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import ViewOnMap from './ViewOnMap/ViewOnMap';
import DeleteModal from './DeleteModal/DeleteModal';
import { useAuth } from '../utils/AuthContext';
import defaultPlaceAvatar from '../assets/defaultAvatarPlace.jpg'

import './UserPlace.css'

const UserPlace = ({ place }) => {

    const creatorId = useParams().uid
    const auth = useAuth()
    const user = auth.user

    let logedUserId
    try {
        logedUserId = user.user.id
    } catch (error) {}

    let THE_CREATOR
    try {
        THE_CREATOR = creatorId === logedUserId
    } catch (error) {}

    const [isViewed, setIsViewed] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    
    const handleViewOnMap = () => {
        setIsViewed(true)
    }

    const handleDelete = () => {
        setIsDelete(true)
    }

  return (
    <div className='user-places'>
        <div className='user-place-data'>
            <img src={process.env.REACT_APP_ASSET_URL + `/assets/${place.image}` } onError={(e) => e.target.src = defaultPlaceAvatar} alt="Place" className='place-image'/>

            <div className='place-title-desc'>
                <h2>{ place.title }</h2>
                <h3>{place.address}</h3>
                <p>{place.description}</p>
            </div>

            <hr  className='hr-line'/>

            <div className='view-edit-delete'>
                <button className='view-map-delete-btns' onClick={handleViewOnMap}>View on Map</button>
                {isViewed && (
                    <ViewOnMap setIsViewed={setIsViewed} user={place} />
                )}

                { THE_CREATOR ? <Link className='active-link' to={`/Places/${place.id}/edit`}>Edit</Link> : <Link className='disable-link' to={`/Places/${place.id}/edit`}>Edit</Link>}

                { THE_CREATOR ? <button className='view-map-delete-btns' onClick={handleDelete}>Delete</button> : <button className='disabled-btn' >Delete</button>}
                {isDelete && (
                    <DeleteModal
                        isDelete={isDelete} 
                        setIsDelete={setIsDelete} 
                        placeId={place.id} 
                        title={place.title} 
                    />
                )}

            </div>
        </div>
    </div>
  )
}

export default UserPlace