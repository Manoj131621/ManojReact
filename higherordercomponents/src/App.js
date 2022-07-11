// import logo from './logo.svg';
import './App.css';
import Clickcounter from './components/Clickcounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <Clickcounter name='Vishwas'/>
      <HoverCounter/>
    </div>
  );
}

export default App;
