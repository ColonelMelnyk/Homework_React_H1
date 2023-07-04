import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { Friend } from './Friend';
export const FriendList = ({friends}) => {
    return (
    <ul class="friend-list">
    {friends.map(friend =>(
    <Friend
    id = {friend.id}
    status = {friend.status}
    avatar={friend.avatar}
    name = {friend.name}
    />
    ))}
  </ul>
);
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(

    ).isRequired,
};