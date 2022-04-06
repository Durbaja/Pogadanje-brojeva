import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {(new Date().getSeconds() % 2 === 0 && (
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        )) || <p>U neparnoj sam sekundi!</p>} */}

        <h1>Browser koji koristim:</h1>
        {!window.chrome
          ? "Vas browser je google chrome!"
          : "Nije google chrome!"}

        {!window.chrome ? (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        ) : (
          <a
            className="App-link"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
