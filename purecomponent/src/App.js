import logo from './logo.svg';
import './App.css';
import PureComp from './components/PureComp';
import Parentcomp from './components/Parentcomp';

function App() {
  return (
    <div className="App">
      {/* <PureComp/> */}
      <Parentcomp />
    </div>
  );
}

export default App;
