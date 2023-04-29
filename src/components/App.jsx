import { Profile } from 'components/Profile/Profile';
import user from '../user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data.json';
import { FrendList } from './FriendList/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FrendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
