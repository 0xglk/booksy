import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MembershipList from './components/MembershipList';
import { Route, Switch } from "react-router";
import BookList from "./components/bookStuff/BookList";
import Bookdetails from "./components/bookStuff/Bookdetails";
function App() {
  return (
    <div>
      <div className="w3-sidebar w3-light-grey w3-bar-block side_bar" >
  <h3 className="w3-bar-item">Menu</h3>
  <h6 className="w3-bar-item w3-button">User List</h6> 
  <h6 className="w3-bar-item w3-button">Book List</h6> 
  <h6 className="w3-bar-item w3-button">Link 3</h6> 
</div>

<div className="Page_Content">
<div className="w3-container w3-teal">
      <h1>Booksy</h1>
    </div>
        <Switch>
          <Route exact path="/" >
            <BookList />
          </Route>
          <Route path="/BookList">
            <center>
            <MembershipList />
            </center>
          </Route>
          <Route path="/Bookdetails:bookid">
            <center>
            <Bookdetails />
            </center>
          </Route>
        </Switch>
  </div>
    </div>  
  );
}

export default App;
