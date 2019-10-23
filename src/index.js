import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from './pages/Home.js'

import './css/reset.css'
import './css/container.css'
import './css/btn.css'
import './css/icon.css'
import './css/iconHeart.css'
import './css/notificacao.css'

ReactDOM.render(
    <Home/>,
    document.querySelector('#rootReact')
)
