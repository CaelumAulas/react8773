
import * as TweetsService from '../../model/services/TweetsService.js'

const LISTA_INICIAL = []

const LISTA = "listaTweets/LISTA"
const LIKE = "listaTweets/LIKE"

// ducks
export function listaTweetsReducer(estadoListaTweets = LISTA_INICIAL, acao) {
     if (acao.type === LISTA) {
        return acao.payload.lista
    }

    if (acao.type === LIKE) {
        const tweetLikeado = estadoListaTweets.find(({_id}) => acao.payload.id === _id)

        if(tweetLikeado) {
            tweetLikeado.likeado = true
            tweetLikeado.totalLikes = tweetLikeado.totalLikes + 1 
        
            return [...estadoListaTweets]
        }
    }
    
    return estadoListaTweets
}

// Action Creators
export const criaAcaoLista = (tweets) => {
    return {
        type: LISTA,
        payload: {
            lista: tweets
        }
    }
}

export const criaAcaoLike = (id) => {
    // objeto
    return {
        type: LIKE, 
        payload: {
            id: id
        }
    }
}

// Thunk Action Creator
export const criaAcaoCarrega = () => {
    return (dispatch) => {
        TweetsService
            .carrega()
            .then((tweets) => {
                dispatch(criaAcaoLista(tweets))
            })
    }
}