import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Container } from './FriendList.styled';
export const FriendList = ({friends}) => {
    return (
    <Container>
    {friends.map(friend =>(
    <Friend
    key = {friend.id}
    isOnline = {friend.isOnline}
    avatar={friend.avatar}
    name = {friend.name}
    />
    ))}
  </Container>
);
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
};