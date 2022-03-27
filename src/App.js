import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What you gonna do big guy? seat on me?
        </p>
        <div className="info">
          <label>Name:</label>
          <input type="text" />
          <label>Age:</label>
          <input type="number" />
          <label>Country:</label>
          <input type="text" />
          <label>Position:</label>
          <input type="text" />
          <label>Wage(Year):</label>
          <input type="number" />
          <button>Add Employee</button>
        </div>
      </header>
    </div>
  );
}

export default App;
