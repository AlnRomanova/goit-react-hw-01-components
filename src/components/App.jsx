import Profile from './Profile/Profile';
import user from 'helpers/user.json';
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import data from 'helpers/data.json';
import friends from 'helpers/friends.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';
import transactions from 'helpers/transactions.json';


export const App = () => {
  return (
    <>
<Container>
<Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
</Container>
    </>
  );
};
