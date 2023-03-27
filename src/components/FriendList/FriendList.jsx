import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.friend__list}>
        {friends.map(item => {
          return (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
              id={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
