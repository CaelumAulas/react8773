import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home.js'
import { LoginPage } from './pages/LoginPage/LoginPage.js'

import * as LoginService from './model/services/LoginService.js'

import { NotificacaoProvider } from './components/NotificacaoProvider/NotificacaoProvider.js'

export function App() {
    return (
    <NotificacaoProvider>
        <Router>
            <Switch>
                <Route path="/" exact={true} render={(routerProps) => (
                    <Home {...routerProps} isAcessoPermitido={ LoginService.isAutenticado() } redirectPermissaoNegada="/login" />
                )} />
                <Route path="/login" render={(routerProps) => (
                    <LoginPage {...routerProps} isAcessoPermitido={ !LoginService.isAutenticado() } redirectPermissaoNegada="/" />
                )} />
            </Switch>
        </Router>
    </NotificacaoProvider>
    )
}
