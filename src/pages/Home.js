import React, { useState } from 'react'

import '../css/novoTweet.css'

import * as LoginService from '../model/services/LoginService.js'

import { 
    Cabecalho, 
    NavMenu, 
    Dashboard, 
    Widget, 
    TrendsArea, 
    Tweet 
} from '../components/index.js'

import { Redirect } from 'react-router-dom'

export function Home() {
    const [ textoTweet, setTextoTweet ] = useState("")
    const [ listaTweets, setListaTweets ] = useState([])

    const isAutenticado = LoginService.isAutenticado()
    
    function onTextareaChange(evento) {
        const $textArea = evento.target
        setTextoTweet($textArea.value)
    }

    function onFormSubmit(evento) {
        evento.preventDefault()
        setListaTweets([ textoTweet , ...listaTweets])
    }

    const isTweetInvalido = textoTweet.length > 140
    const classeStatus = "novoTweet__status " +  (isTweetInvalido ? "novoTweet__status--invalido" : "")

    const $pagina = (
        <React.Fragment>
            <Cabecalho>
                <NavMenu usuario="@artdiniz"></NavMenu>
            </Cabecalho>
            
            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet" onSubmit={ onFormSubmit }>
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
                                <Tweet qtLikes={ "oi" } > 
                                    {conteudo} 
                                </Tweet>
                            )) }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            {isAutenticado
                ? $pagina
                : <Redirect to="/login" />
            }
        </React.Fragment>
    )
}
