import React from 'react';


const FriendListItem = ({friend: {avatar, name, isOnline}})=> {

  return (
    <>
   {isOnline
   ? (<span className="status online">{isOnline} </span>)
   : (<span className="status offline">{isOnline} </span>)}
   <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
  </>
  )
}


export default FriendListItem;
