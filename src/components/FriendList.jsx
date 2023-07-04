import PropTypes from 'prop-types';
import { Friend } from './Friend';
export const FriendList = ({friends}) => {(
    <ul class="friend-list">
    {friends.map(friend =>(
       Friend
    ))}
  </ul>
);
};
FriendList.PropTypes = {
    friends: PropTypes.arrayOf().isRequired,
};