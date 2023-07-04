import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { Container } from './FriendList.styled';
export const FriendList = ({friends}) => {
    return (
    <Container>
    {friends.map(friend =>(
    <Friend
    id = {friend.id}
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

    ).isRequired,
};