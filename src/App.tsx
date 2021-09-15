import React from 'react';
import './App.css';
import UsersList from "./components/UsersList";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import TodoList from "./components/TodoList";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UsersList}/>
                <Route path="/todos" component={TodoList}/>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
