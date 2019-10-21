// ESModules em navegadores antigos
import { Tweet } from '/js/components/Tweet/index.js'

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
