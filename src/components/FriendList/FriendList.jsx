import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from "prop-types";


 const FriendList = ({friends}) => {
  return (
    <ul>
    {friends.map((friend) => (
   <li className={css.item} key={friend.id}>
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
