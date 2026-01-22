import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';

function App() {
  const isLoggedIn = true;
  const users = ['Alice', 'Bob', 'Charlie'];
// feature login
  return (
    <div>
      <h1>Karl Alinsub's First Website</h1>

      {/* Conditional Rendering */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}

      {/* Local user list */}
      <UserList users={users} />

      {/* Counter example */}
      <Counter />

      {/* API fetched users */}
      <h2>Users from API</h2>
      <UserAPI />
    </div>
  );
}

export default App;



