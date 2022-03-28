import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {

  const[name, setName] = useState("");
  const[age, setAge] = useState(0);
  const[country, setCountry] = useState("");
  const[position, setPosition] = useState("");
  const[wage, setWage] = useState(0);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then((response));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What you gonna do big guy? seat on me?
        </p>
        <div className="info">
          <label>Name:</label>
          <input type="text" 
          onChange={(event) => {setName(event.target.value);}}/>
          <label>Age:</label>
          <input type="number" 
          onChange={(event) => {setAge(event.target.value);}}/>
          <label>Country:</label>
          <input type="text" 
          onChange={(event) => {setCountry(event.target.value);}}/>
          <label>Position:</label>
          <input type="text" 
          onChange={(event) => {setPosition(event.target.value);}}/>
          <label>Wage(Year):</label>
          <input type="number" 
          onChange={(event) => {setWage(event.target.value);}}/>
          <button onClick={addEmployee}>Add Employee</button>
        </div>
      </header>
    </div>
  );
}

export default App;
