import React, { useState, useEffect} from 'react'

import { 
    Cabecalho, 
    NavMenu, 
    Dashboard, 
    Widget, 
    TrendsArea, 
    Tweet 
} from '../components/index.js'

import { withPermissao } from  './withPermissao.js'

import { FormNovoTweet } from '../components/FormNovoTweet/FormNovoTweet.js'

import * as TweetsService from '../model/services/TweetsService.js'

function AreaNovoTweet(props) {
    return (
        <React.Fragment>
            <p> Coisas novas em cima </p>
            <br />
            <br />
            <FormNovoTweet onNovoTweet={props.onNovoTweet} />
            <br />
            <br />
            <p> Coisas novas embaixo </p>
        </React.Fragment>
    )
}

function HomeSemAutenticacao() {
    const [ listaTweets, setListaTweets ] = useState([])

    function adicionaTweet(novoTweet) {
        TweetsService.adiciona(novoTweet)
            .then((novoTweetInfo) => {
                setListaTweets([ novoTweetInfo , ...listaTweets])
            })
    }

    useEffect(() => {
        TweetsService.carrega()
            .then((tweets) => {
                setListaTweets(tweets)
            })
    }, [])

    return (
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
                            { listaTweets.map(tweetInfo => (
                                <Tweet {...tweetInfo} > 
                                    {tweetInfo.conteudo} 
                                </Tweet>
                            )) }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </React.Fragment>
    )
}

export const Home = withPermissao(HomeSemAutenticacao)
