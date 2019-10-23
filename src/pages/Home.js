import React from 'react'

import { 
    Cabecalho, 
    NavMenu, 
    Dashboard, 
    Widget, 
    TrendsArea, 
    Tweet 
} from '../components/index.js'

const listaTweets = [
    "Tweet 1",
    "Tweet 2",
    "Tweet 3"
]


export function Home() {
    return (
    <React.Fragment>
        <Cabecalho>
            <NavMenu usuario="@artdiniz"></NavMenu>
        </Cabecalho>
        
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet">
                        <div className="novoTweet__editorArea">
                            <span className="novoTweet__status">0/140</span>
                            <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea></TrendsArea>
                </Widget>
            </Dashboard>

            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        { listaTweets.map(conteudo => (
                            <Tweet qtLikes={2} > 
                                {conteudo} 
                            </Tweet>
                        )) }
                    </div>
                </Widget>
            </Dashboard>
        </div>
    </React.Fragment>
    )
}