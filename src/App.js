import ListNotes from "./Components/ListNotes/ListNotes";
import React from "react";
import MainArea from "./Components/MainArea/MainArea";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/" exact component={ListNotes} />
          <Route path="/edit" exact component={MainArea} />
        </Switch>
      </Router>
      {/* <MainArea />
      <ListNotes />
      <Sidebar /> */}
    </div>
  );
}

export default App;
