import logo from "./logo.svg";
import "./App.css";
import LearnReactButton from "./LearnReactButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LearnReactButton />
      </header>
    </div>
  );
}

export default App;
