// import logo from './logo.svg';S
import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import './appstyles.css'
import styles from './appstyle.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
    {/* <Stylesheet primary={true}/> */}
    </div>
  );
}

export default App;
