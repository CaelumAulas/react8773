import React, { createContext, useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import { Home } from './pages/Home.js'
import { LoginPage } from './pages/LoginPage/LoginPage.js'

import * as LoginService from './model/services/LoginService.js'

export function App() {
    return (
    <NotificacaoProvider>
        <Router>
            <Switch>
                <Route path="/" component={ Home } exact={true}/>
                <Route path="/login" component={ LoginPage } />
            </Switch>
        </Router>
    </NotificacaoProvider>
    )
}


export const NotificacaoContexto = createContext({
    notificar: () => {}
})

function NotificacaoProvider(props) {

    const [msg, setMsg] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setMsg("")
        }, 2000)
    })

    return (
        <NotificacaoContexto.Provider value={{notificar: setMsg}}>
            { props.children }
            {msg
                ? <div class="notificacaoMsg"> { msg } </div>
                : ''
            }
        </NotificacaoContexto.Provider>
    )
}