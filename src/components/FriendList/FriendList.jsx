import FriendListItem from './FriendListItem';
import './FriendList.styles.css';
import PropTypes from "prop-types";


 const FriendList = ({friends}) => {
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
}).isRequired).isRequired,
}
