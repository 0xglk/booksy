import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MembershipList from './components/MembershipList';
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import BookList from "./components/bookStuff/BookList";
import Bookdetails from "./components/bookStuff/Bookdetails";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <div>
      <div className="w3-sidebar w3-light-grey w3-bar-block side_bar" >
      <h3 className="w3-bar-item">Menu</h3>
      <Link to={`/MembershipList`}><h6 className="w3-bar-item w3-button">User List</h6> </Link>
      <Link to={`/`}><h6 className="w3-bar-item w3-button">Book List</h6> </Link>
       </div>

<div className="Page_Content">
<div className="w3-container w3-teal">
<Link to={`/`}><h1 className="logoName">Booksy</h1></Link>
    </div>
        <Switch>
          <Route exact path="/" >
            <BookList />
          </Route>
          <Route path="/Bookdetails/:slugid">
            <center>
            <Bookdetails />
            </center>
          </Route>
          <Route path="/UserDetails/:slugid">
            <center>
            <UserDetails />
            </center>
          </Route>
          <Route path="/MembershipList">
            <center>
            <MembershipList />
            </center>
          </Route>
        </Switch>
  </div>
    </div>  
  );
}

export default App;
