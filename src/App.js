import React from 'react';
import UserList from './UserList';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h2>User List</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;


