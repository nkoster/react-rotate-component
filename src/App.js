import logo from './logo.svg';
import './App.css';
import Rotate from './components/Rotate'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rotate>
          <img src={logo} className="App-logo" alt="logo" />
          test
        </Rotate>
        <Rotate>
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        </Rotate>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
