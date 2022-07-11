// import logo from './logo.svg';
import './App.css';
import Clickcounter from './components/Clickcounter';
import Counter from './components/Counter';
import Hovercounter from './components/Hovercounter';

function App() {
  return (
    <div className="App">
      <Counter
      render={(count,incrementCount) => (
        <Clickcounter count ={count} incrementCount={incrementCount}/>
      )} />
      <Counter
      render={(count,incrementCount) => (
        <Hovercounter count ={count} incrementCount={incrementCount}/>
      )} />
    </div>
  );
}

export default App;
