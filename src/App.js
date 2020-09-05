import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Error from './pages/error' 
import Home from './pages/home' 
import Rooms from './pages/rooms' 
import Singleroom from './pages/singleroom' 
import Navbar from './components/navbar'

function App() {
  return (
    < >
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={Singleroom}/>
      <Route component={Error}/>
     </Switch>
    </>
  );
}

export default App;
