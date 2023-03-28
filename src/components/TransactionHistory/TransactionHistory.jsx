import PropTypes from 'prop-types';
import { Container, Table, Thead } from './TransactionHistory.styled';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </Thead>

        <tbody>
          {items.map(item => {
            return (
              <TransactionHistoryItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
