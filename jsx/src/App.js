// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Greet from './props/Greet';
import Welcome from './props/Welcome';
import Message from './state/Message';


function App() {
  return (
    <div className="App">
     {/* <Hello /> */}
     {/* <Greet name='Manoj' Heroname='Kumar'/>
     <p>This is my First Sentence</p>
     <Greet name='Kumar' Heroname='Seeta'/>
     <button>Click me</button>
     <Greet name='Seeta' Heroname='Manoj' />
     <Welcome name='Manoj' Heroname='Kumar' />
     <Welcome name='Kumar' Heroname='Seeta'/>
     <Welcome name='Seeta' Heroname='Manoj'/> */}
     {/* <Message /> */}
     <Welcome/>
         </div>
  );
}

export default App;
