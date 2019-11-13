import { createStore } from 'redux'

const ESTADO_INICIAL = { listaTweets: [] }

export const store = createStore(function reducer(estado = ESTADO_INICIAL, acao) {

    if (acao.type === "LISTA") {
        return {
            listaTweets: acao.lista
        }
    }

    if (acao.type === "LIKE") {
        const tweetLikeado = estado.listaTweets.find(({_id}) => acao.id === _id)

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