import React from 'react';
import './App.css';
import { Switch, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/details' component={DetailsPage}/>
      </Switch>
    </div>
  );
}

export default App;
