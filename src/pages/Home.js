import React, { useState, Fragment } from 'react'

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


function FormNovoTweet(props) {
    const [ textoTweet, setTextoTweet ] = useState("")

    function onTextareaChange(evento) {
        const $textArea = evento.target
        setTextoTweet($textArea.value)
    }

    function onFormSubmit(evento) {
        evento.preventDefault()
        // Aqui tem que adicionar um tweet. Ma não tem onde
        props.onNovoTweet(textoTweet)
    }

    const isTweetInvalido = textoTweet.length > 140
    const classeStatus = "novoTweet__status " +  (isTweetInvalido ? "novoTweet__status--invalido" : "")

    return (
        <form className="novoTweet" onSubmit={ onFormSubmit }>
            <div className="novoTweet__editorArea">
                <span className={ classeStatus }>{ textoTweet.length }/140</span>
                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={ onTextareaChange }></textarea>
            </div>
            <button disabled={ isTweetInvalido }  type="submit" className="novoTweet__envia">Tweetar</button>
        </form>
    )
}

// 

function AreaNovoTweet(props) {
    return (
        <React.Fragment>
            Firula em cima
            <FormNovoTweet onNovoTweet={props.onNovoTweet} />
            Firula embaixo
        </React.Fragment>
    )
}

export function Home() {
    const isAutenticado = LoginService.isAutenticado()

    const [ listaTweets, setListaTweets ] = useState([])

    function adicionaTweet(novoTweet) {
        alert("oi")
        setListaTweets([ novoTweet , ...listaTweets])
    }

    const $pagina = (
        <React.Fragment>
            <Cabecalho>
                <NavMenu usuario="@artdiniz"></NavMenu>
            </Cabecalho>
            
            <div className="container">
                <Dashboard>
                    <Widget>
                       <AreaNovoTweet onNovoTweet={adicionaTweet} />
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
        <Fragment>
                {isAutenticado
                    ? $pagina
                    : <Redirect to="/login" />
                }
        </Fragment>
    )
}

// High Order Component
// HOC
function withCondicao(qualElemento) {
    return function ComCondicao(props) {
        return (
            <Fragment>
                {props.condicao
                    ? qualElemento
                    : props.outroElemento
                }
            </Fragment>
        )
    }
}

const HomeComCondicao = withCondicao(Home)

function HomeHighOrder(props) {
    const isAutenticado = LoginService.isAutenticado()
    return (
        <HomeComCondicao {...props} condicao={isAutenticado} outroElemento={<Redirect to="/login" />} />
    )
}