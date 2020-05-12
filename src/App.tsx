import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter, AddCounter, SecondCounter} from './components';
import { Provider} from 'react-redux';

interface AppProps {
  store: any
}

const App: React.FC<AppProps> = ({store}) =>  {
  console.log(store);
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <AddCounter></AddCounter>
            <Counter></Counter>
            <SecondCounter></SecondCounter>
        </header>
      </div>
    </Provider>
  );
}

export default App;
