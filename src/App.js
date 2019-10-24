import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import { Home } from './pages/Home.js'
import { LoginPage } from './pages/LoginPage/LoginPage.js'

import * as LoginService from './model/services/LoginService.js'

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