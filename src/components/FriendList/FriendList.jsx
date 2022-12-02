import React from 'react';
import FriendListItem from './FriendListItem';
import './FriendList.styles.css';



 const FriendList = ({friends}) => {
  console.log(friends)
  return (
    <ul>
    {friends.map((friend) => (
   <li className="item" key={friend.id}>
    <FriendListItem friend={friend}/>
   </li>
 ))}
 </ul>
  )
}

export default FriendList;
