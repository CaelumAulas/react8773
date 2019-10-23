import React from 'react'

import { Tweet } from '../components/Tweet/Tweet.js'

const listaTweets = [
    "Tweet 1",
    "Tweet 2",
    "Tweet 3"
]


export function Home() {
    return (
    <>
        <header class="cabecalho">
            <div class="cabecalho__container container">
                <h1 class="cabecalho__logo">
                    <a href="/">Twitelum</a>
                </h1>
                <nav class="navMenu">
                    <ul class="navMenu__lista">
                        <li class="navMenu__item">
                            <a class="navMenu__link" href="/">
                                Bem vindo(a): <br />
                                <strong> @usuario</strong>
                            </a>
                        </li>
                        <li class="navMenu__item">
                            <a class="navMenu__link" href="/">
                                Página Inicial
                            </a>
                        </li>
                        <li class="navMenu__item">
                            <a class="navMenu__link" href="/hashtags">
                                Hashtags
                            </a>
                        </li>
                        <li class="navMenu__item">
                            <a class="navMenu__link" href="/logout">
                                Logout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
        <div class="container">
            <div class="dashboard">
                <div class="widget">
                    <form class="novoTweet">
                        <div class="novoTweet__editorArea">
                            <span class="novoTweet__status">0/140</span>
                            <textarea class="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" class="novoTweet__envia">Tweetar</button>
                    </form>
                </div>
                <div class="widget">
                    <div class="trendsArea">
                        <h2 class="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                        <ol class="trendsArea__lista">
                            <li><a href="/">#bagulhos</a></li>
                            <li><a href="/">#bagulheiros</a></li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="dashboard dashboard__centro">
                <div class="widget">
                    <div class="tweetsArea">
                        { listaTweets.map(conteudo => (
                            <Tweet qtLikes={2} > 
                                {conteudo} 
                            </Tweet>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}