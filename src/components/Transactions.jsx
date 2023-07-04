import PropTypes from 'prop-types';
import css from './Transactions.module.css'
export const Transaction = ({items}) =>{
   return (
    <table className={css.transactionhistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({id, type, amount, currency}) =>(
            <tr id ={id}>  
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>   
            ))}
    
  </tbody>
  </table>
    );
};
Transaction.propTypes ={
 items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }),
 ).isRequired
};