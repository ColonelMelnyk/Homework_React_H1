import PropTypes from 'prop-types';
import { Status, ListMember, FriendName } from './Friend.styled';
export const Friend = ({avatar, name, isOnline, id}) => {
    return (
        <ListMember id ={id}>
        <Status isOnline = {isOnline}/>
        <img src={avatar} alt="User avatar" width="64" />
        <FriendName>{name}</FriendName>
        </ListMember>
        );
};
Friend.propTypes ={
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};