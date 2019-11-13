import * as LoginService from './LoginService.js'

const TWEETS_URL = "https://twitelum-api.herokuapp.com/tweets"

export const carrega = () =>
    fetch(`${TWEETS_URL}?X-AUTH-TOKEN=${LoginService.getToken()}`)
    .then(
        response => response.json()
    )

export const adiciona = conteudo =>
    fetch(
        `${TWEETS_URL}?X-AUTH-TOKEN=${LoginService.getToken()}` 
        ,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                conteudo
            })
        }
    )
    .then(respostaDoServer => {
        return respostaDoServer.json()
    })

export const remove = idTweetQueVaiSerRemovido =>
    fetch(
        `https://twitelum-api.herokuapp.com/tweets/${idTweetQueVaiSerRemovido}?X-AUTH-TOKEN=${LoginService.getToken()}`
        ,{ method: "DELETE" }
    )
    .then(data => data.json())

export const like = idDoTweet =>
    fetch(
        `https://twitelum-api.herokuapp.com/tweets/${idDoTweet}/like?X-AUTH-TOKEN=${LoginService.getToken()}`
        ,{ method: "POST" }
    )
    .then(response => response.json())
