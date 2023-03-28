import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Container, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <List>
        {friends.map(item => {
          return (
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          );
        })}
      </List>
    </Container>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
