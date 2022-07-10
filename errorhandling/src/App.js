import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
     <Hero heroname="batsman"/>
     </Errorboundary>
     <Errorboundary>
     <Hero heroname="superman"/>
     </Errorboundary>
     <Errorboundary>
     <Hero heroname="joker"/>
     </Errorboundary>
    </div>
  );
}

export default App;
