import PropTypes from 'prop-types';
import { Status, ListMember, FriendName } from './Friend.styled';
export const Friend = ({avatar, name, isOnline}) => {
    return (
        <ListMember>
        <Status isOnline = {isOnline}/>
        <img src={avatar} alt="User avatar" width="64" />
        <FriendName>{name}</FriendName>
        </ListMember>
        );
};
Friend.propTypes ={
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};