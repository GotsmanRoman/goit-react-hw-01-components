//import PropTypes from 'prop-types';
import { Row, Name } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <Row>
      <Name>{type}</Name>
      <Name>{amount}</Name>
      <Name>{currency}</Name>
    </Row>
  );
};
