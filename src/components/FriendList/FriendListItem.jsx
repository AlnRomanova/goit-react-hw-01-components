import React from 'react';

const FriendListItem = ({avatar, name, isOnline})=> {
  return (
    <li className="item">
  <span className="status">{isOnline}</span>
  <img classNane="avatar" src={avatar} alt="User avatar" width="48" />
  <p classNane="name">{name}</p>
</li>
  )
}


export default FriendListItem;
