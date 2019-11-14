import { createStore } from 'redux'

const ESTADO_INICIAL = { listaTweets: [] }

export const store = createStore(function reducer(estado = ESTADO_INICIAL, acao) {

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
})


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
    return {
        type: "LIKE", 
        payload: {
            id: id
        }
    }
}