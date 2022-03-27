import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import "./style/App.css";
import PrivateRoute from "./components/privateRoute";
import {Item1,Item2,Item3} from "./routes";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <PrivateRoute component={Home} exact path="/"/>
        <Route path="/login"> <Login/> </Route>
        <Route path="/item1"> <Item1/> </Route>
        <Route path="/item2"> <Item2/> </Route>
        <Route path="/item3"> <Item3/> </Route>
      </Switch>
    </Router>
    </>
  );
};

export default App;