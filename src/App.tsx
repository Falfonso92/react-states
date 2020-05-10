import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, AddCounter} from './ui-components';

function App() {
  const [counter, setCounter] = React.useState(0);
  console.log("app render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={counter}></Counter>
        <AddCounter counter={counter} setCounter={setCounter}></AddCounter>
      </header>
    </div>
  );
}

export default App;
