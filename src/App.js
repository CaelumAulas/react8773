import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home.js'
import { LoginPage } from './pages/LoginPage/LoginPage.js'

export function App() {

    return (
        <Router>
            <Switch>
                <Route path="/" component={ Home } exact={true}/>
                <Route path="/login" component={ LoginPage } />
            </Switch>
        </Router>
    )
}