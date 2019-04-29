import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Forms
import AddPicture from './components/Forms/AddPicture'
import EditDay from './components/Forms/EditDay'
import NewDay from './components/Forms/NewDay'
import NewTrip from './components/Forms/NewTrips'
import EditTrip from './components/Forms/EditTrip'
import TripList from './components/UI/TripList'
//UI
import Home from './components/UI/Home'


export default () => {
  
  return (
    <div>
      <Router>
          <Switch>   
          <Route exact path="/" component={Home}/>
          <Route path="/AddPicture" component={AddPicture} />
          <Route path="/EditDay" component={EditDay} />
          <Route path="/NewDay" component={NewDay} />
          <Route path="/TripList" component={TripList} />
          <Route path="/EditTrip" component={EditTrip} />
          <Route path="/NewTrip" component={NewTrip} />   
        </Switch>
      </Router>
    </div>
  );
}