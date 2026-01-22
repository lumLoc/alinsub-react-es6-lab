import React from 'react';
import UserList from './UserList';
import Counter from './Counter';

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <UserList users={users} />
      <Counter />
    </div>
  );
}

export default App;

