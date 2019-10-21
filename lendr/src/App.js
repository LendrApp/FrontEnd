import React from 'react';
import {Welcome, Register, Login} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Route exact path = '/login' component = {Login} />
      <Route exact path = '/register' component = {Register} />
    </div>
  );
}

export default App;
