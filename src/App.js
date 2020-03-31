import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { Grid } from 'semantic-ui-react';

import Navbar from './components/Navbar'

function App() {
  //create hooks here to maintain state
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("./data/en_US.json");
      setData(result.data);
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="App">
      <Grid>
        <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{data.heading}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Grid>
    </div>
  );
}

export default App;
