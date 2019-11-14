import { createStore, applyMiddleware } from 'redux'

import thunkMiddleware from 'redux-thunk'

import * as TweetsService from './model/services/TweetsService.js'

const ESTADO_INICIAL = { listaTweets: [] }

function reducer(estado = ESTADO_INICIAL, acao) {

    if (acao.type === "LISTA") {
        return {
            listaTweets: acao.payload.lista
        }
    }

    if (acao.type === "LIKE") {
        const tweetLikeado = estado.listaTweets.find(({_id}) => acao.payload.id === _id)

        if(tweetLikeado) {
            tweetLikeado.likeado = true
            tweetLikeado.totalLikes = tweetLikeado.totalLikes + 1 
        
            return {
                listaTweets: [...estado.listaTweets]
            }
        }
    }

    return estado
}

export const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
)


// Action Creators
export const criaAcaoLista = (tweets) => {
    return {
        type: "LISTA",
        payload: {
            lista: tweets
        }
    }
}

export const criaAcaoLike = (id) => {
    // objeto
    return {
        type: "LIKE", 
        payload: {
            id: id
        }
    }
}

//Thunk Action Creator
export const criaAcaoCarrega = () => {
    return (dispatch) => {
        TweetsService
            .carrega()
            .then((tweets) => {
                dispatch(criaAcaoLista(tweets))
            })
    }
}