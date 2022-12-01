import Profile from "./Profile/Profile";
import user from 'helpers/user.json';


export const App = () => {
  console.log(user)
  return (
    <>
<Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/>
    </>


  );
};



// style={{
//   height: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: 40,
//   color: '#010101'
// }}
