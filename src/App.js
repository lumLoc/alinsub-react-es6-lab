import logo from './logo.svg';
import './App.css';

function App() {
  // ES6 Array & Arrow Function
  const names = ['Alice', 'Bob', 'Charlie'];
  const doubled = names.map(name => name.length * 2);
  console.log('Doubled lengths:', doubled);

  // ES6 Object Destructuring
  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  console.log('Destructured:', name, age);

  return (
    <div>
      <h1>ES6 Features in React</h1>
      <p>Check the browser console for output.</p>
    </div>
  );
}

export default App;

