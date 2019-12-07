import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Start from "./components/StartButton";
import SemesterList from "./components/SemesterList";
import ProjectDetails from "./components/ProjectDetails";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/(login|register)" component={Login} />
        <Route path="/:projectID" component={ProjectDetails} />
        <Route path="/" component={SemesterList} />

        {/* <Route
          path="/authors/"
          render={props => (
            <AuthorsList {...props} authors={this.state.authors} />
          )}
        />
        <Route
          path="/books/:bookColor?"
          render={props => <BookList {...props} books={this.state.books} />}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
