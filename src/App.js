import React, { useState } from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const users = ['Alice', 'Bob', 'Charlie'];

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Karl Alinsub</h1>
        <p className="subtitle">React & ES6 Demonstration Website</p>
      </header>

      {/* Login Section */}
      <section className="greeting">
        {isLoggedIn ? (
          <p className="welcome">Welcome back, Karl!</p>
        ) : (
          <p className="login-prompt">Please log in to continue</p>
        )}
        <button onClick={handleLoginToggle}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </section>

      {/* Local User List */}
      <section className="user-list-section">
        <h2>Team Members</h2>
        <UserList users={users} />
      </section>

      {/* Counter */}
      <section className="counter-section">
        <h2>Interactive Counter</h2>
        <Counter />
      </section>

      {/* API Users */}
      <section className="api-users-section">
        <h2>Users from API</h2>
        <UserAPI />
      </section>

      <footer className="app-footer">
        <p>© 2026 Karl Alinsub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

