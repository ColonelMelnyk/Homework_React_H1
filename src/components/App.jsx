import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { FriendList } from './FriendList';
import { Statistics } from './Stats';
import { Profile } from './Profile';
import { Transaction } from './Transactions';
export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </div>
  );
};