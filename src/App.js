import './App.css';
// import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Location from './components/Location';



function App() {
  const Hello = props => {
    const { entered } = useParams();
    const history = useHistory();
    const goback = () => {
      history.goBack()
    }
    if(isNaN(+entered)){
      return (
      <div>
        <h1 style={{color: "brown"}}>Here is your word {entered}</h1>
        <button onClick={goback}>Back</button>
      </div>)
    }
    else{
      return (
      <div>
        <h1 style={{color: "green"}}>Here is your number {entered}</h1>
        <button onClick={goback}>Back</button>
      </div>)
    }
  }
  const Special = props => {
    const { string1, string2, string3} = useParams();
    const history = useHistory();
    const goback = () => {
      history.goBack()
    }
    return (
    <div>
      <h1 style={{color: string2, backgroundColor: string3}}>Here is your {string1}</h1>
      <button onClick={goback}>Back</button>
    </div>)
  }
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/home">Home</Link>
        {" | "}
        <Link to="/hello">Hello</Link>
        {" | "}
        <Link to="/4">Number 4</Link> 
        {" | "}
        <Link to="/hello/blue/red">Special Hello</Link> 
        {" | "}
        <Link to="/Seattle">Seattle</Link>
        {" | "}
        <Link to="/Chicago">Chicago</Link>
        {" | "}   
        <Link to="/Burbank">Burbank</Link>
      </p>

      <Switch>
        <Route exact path="/home">
            <Home />
        </Route>
        {/* <Route exact path="/:city">
            <Location/>
        </Route> */}
        <Route exact path="/:entered">
          <Hello/>
        </Route>
        <Route exact path="/:string1/:string2/:string3">
            <Special />
        </Route>
        {/* <Route path="/:int">
          <Hello/>
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
