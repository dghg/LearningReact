import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDropDown from './Components/CountryDropDown';
import RandomMeUsers from './Components/RandomMeUsers';


function App() {
  return (
    <div className="App">
		<RandomMeUsers count={2}/>
		<CountryDropDown selected="United States" />
    </div>
  );
}

export default App;
