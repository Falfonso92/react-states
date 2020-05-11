import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, AddCounter, SecondCounter} from './components';
import {AppContext} from './context';
import { AppProvider } from './providers';
import { AppStore } from './store';


function App() {
  const appStore = new AppStore();
  console.log("app render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppProvider>
          <Counter></Counter>
          <SecondCounter></SecondCounter>
          <AddCounter></AddCounter>
        </AppProvider>
      </header>
    </div>
  );
}

export default App;
