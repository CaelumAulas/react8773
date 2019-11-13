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
import { Modal } from "../components/Modal/Modal.js"

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

    function removeTweet(id) {
        TweetsService
            .remove(id)
            .then(() => {
                setListaTweets(listaTweets.filter(({_id}) => id !== _id))
            })
    }

    const [tweetModal, setTweetModal] = useState(null)

    function abreModal(tweet) {
        setTweetModal(tweet)
    }

    function fechaModal() {
        setTweetModal(null)
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
                                <Tweet {...tweetInfo} removeHandler={() => removeTweet(tweetInfo._id)} onConteudoClicado={() => abreModal(tweetInfo)}> 
                                    {tweetInfo.conteudo} 
                                </Tweet>
                            )) }
                        </div>
                    </Widget>
                </Dashboard>
            </div>

            <Modal isAberto={tweetModal !== null} onFechando={fechaModal}>
                {() => (
                    <Tweet {...tweetModal}>
                        {tweetModal.conteudo} 
                    </Tweet>
                )}
            </Modal>
        </React.Fragment>
    )
}

export const Home = withPermissao(HomeSemAutenticacao)
