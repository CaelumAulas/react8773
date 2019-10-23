import React, { useState } from 'react'

import '../css/novoTweet.css'

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

    const [ textoTweet, setTextoTweet ] = useState("")
    
    function onTextareaChange(evento) {
        const $textArea = evento.target
        setTextoTweet($textArea.value)
    }

    const isTweetInvalido = textoTweet.length > 140
    const classeStatus = "novoTweet__status " +  (isTweetInvalido ? "novoTweet__status--invalido" : "")

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
                            <span className={ classeStatus }>{ textoTweet.length }/140</span>
                            <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={ onTextareaChange }></textarea>
                        </div>
                        <button disabled={ isTweetInvalido }  type="submit" className="novoTweet__envia">Tweetar</button>
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