import React from "react";

import { Link } from "react-router-dom";
import defaultAvatarUser from '../assets/defaultAvatarProfile.jpg'
import "./UserCard.css";

const UserCard = ({ users }) => {
  console.log('USERS --- ', users.users);

  const USERS = users.users

  if (USERS.length === 0 ) {
    return (
      <div className="center-no-user-found">
        <h1>No User Was Found!</h1>
        <Link to='/SignUp' className="new-place-btn">Create New User</Link>
      </div>
    )
  }

  return (
    <div className="users-list">

        {USERS?.map((user) => {

          let noPlaces = user.places.length 
          return (
            <Link to={`${user.id}/Places`} className="userlink" key={user.id}>
                <div className="one-user">
                    <img src={process.env.REACT_APP_ASSET_URL + `/assets/${user.image}` } onError={(e) => e.target.src = defaultAvatarUser} alt="Profile" className="picture-for-profile" />
                    <div className="name-places">
                        <h3>{user.name}</h3>
                        <p>{noPlaces} {noPlaces === 0 ? '- no place visited' : noPlaces === 1 ? 'place visited' : 'places visited'}</p>
                    </div>
                </div>
            </Link>
          );
        })}

    </div>
  );
};

export default UserCard;
