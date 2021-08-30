import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import { GetAllStudents } from './Pages/GetAllStudents';
import { Header } from './Pages/Header';
import { GetOneStudent } from './Pages/GetOneStudent';
import { AddStudent } from './Pages/AddStudent';

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path={"/"}
            component={() => {
              return (<GetAllStudents />)
            }} />
          <Route
            exact
            path={"/get-one-students"}
            component={() => {
              return (<GetOneStudent />)
            }} />
            <Route
            exact
            path={"/add-new-students"}
            component={() => {
              return (<AddStudent />)
            }} />
          <Route
            exact
            path={"/get-all-students"}
            component={() => {
              return (<GetAllStudents />)
            }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
