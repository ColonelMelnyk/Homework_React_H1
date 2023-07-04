import PropTypes from 'prop-types';
import css from './Friend.module.css'
export const Friend = ({avatar, name, isOnline, id}) => {
    return (
        <li class="item" id ={id}>
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
        </li>
        );
};
Friend.propTypes ={
    id: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};