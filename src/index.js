import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './pages/Home.js'

import './css/reset.css'
import './css/container.css'
import './css/btn.css'
import './css/icon.css'
import './css/iconHeart.css'
import './css/notificacao.css'

import './css/cabecalho.css'
import './css/navMenu.css'
import './css/dashboard.css'
import './css/widget.css'
import './css/novoTweet.css'
import './css/trendsArea.css'

ReactDOM.hydrate(
    <Home/>,
    document.querySelector('body')
)
