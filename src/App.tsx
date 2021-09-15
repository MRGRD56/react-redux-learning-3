import React from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import {Redirect, Route, Switch} from "react-router";

function App() {
    return (
        <Switch>
            <Route path="/" exact component={UsersList}/>
            <Route path="/todos"/>
            <Redirect to="/"/>
        </Switch>
    );
}

export default App;
