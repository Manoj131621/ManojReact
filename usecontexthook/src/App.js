// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';

export const Usercontext = React.createContext()
export const Channelcontext = React.createContext()
function App() {
  return (
    <div className="App">
      <Usercontext.Provider value={'vishwas'}>
        <Channelcontext.Provider value={'codeevolution'}>
        <ComponentC/>
        </Channelcontext.Provider>
      </Usercontext.Provider>
    </div>
  );
}

export default App;
