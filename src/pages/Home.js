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

import { store, criaAcaoLista, criaAcaoLike} from '../store.js'

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

    store.subscribe(() => {
        setListaTweets(store.getState().listaTweets)
    })

    useEffect(() => {
        TweetsService.carrega()
            .then((tweets) => {
                store.dispatch(criaAcaoLista(tweets))
            })
    }, [])

    function adicionaTweet(textoNovoTweet) {
        TweetsService.adiciona(textoNovoTweet)
            .then((novoTweetInfo) => {
                setListaTweets([ novoTweetInfo , ...listaTweets])
            })
    }

    const [tweetModal, setTweetModal] = useState(null)

    function removeTweet(id) {
        TweetsService
            .remove(id)
            .then(() => {
                setListaTweets(listaTweets.filter(({_id}) => id !== _id))
                setTweetModal(null)
            })
    }

    function abreModal(tweet) {
        setTweetModal(tweet)
    }

    function fechaModal() {
        setTweetModal(null)
    }

    function dahLike(id) {
        store.dispatch(criaAcaoLike(id))
    }

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
                                <Tweet {...tweetInfo} onLike={() => dahLike(tweetInfo._id)} removeHandler={() => removeTweet(tweetInfo._id)} onConteudoClicado={() => abreModal(tweetInfo)}> 
                                    {tweetInfo.conteudo} 
                                </Tweet>
                            )) }
                        </div>
                    </Widget>
                </Dashboard>
            </div>

            <Modal isAberto={tweetModal !== null} onFechando={fechaModal}>
                {() => (
                    <Tweet {...tweetModal} onLike={() => dahLike(tweetModal._id)} removeHandler={() => removeTweet(tweetModal._id)}>
                        {tweetModal.conteudo} 
                    </Tweet>
                )}
            </Modal>
        </React.Fragment>
    )
}

export const Home = withPermissao(HomeSemAutenticacao)
