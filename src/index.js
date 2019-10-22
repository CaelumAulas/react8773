import ReactDOM from 'react-dom'

// ESModules em navegadores antigos
import { Tweet } from './components/Tweet/Tweet.js'

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

const listaTweets = [
    "Tweet 1",
    "Tweet 2",
    "Tweet 3"
]

const $listaTweets = listaTweets.map(conteudo => Tweet(conteudo))

ReactDOM.render(
    $listaTweets,
    document.querySelector('.tweetsArea')
)
