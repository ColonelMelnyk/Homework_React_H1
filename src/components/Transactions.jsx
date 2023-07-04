import PropTypes from 'prop-types';
export const Transaction = ({transactions}) =>{
    (
    <table class="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {transactions.map(({id, type, amount, currency}) =>(
            <tr> id ={id}
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>   
            ))}
    
  </tbody>
  </table>
    );
};
Transaction.PropTypes ={
 transactions: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }),
 ).isRequired
};