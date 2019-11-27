import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './tweet.css'

Tweet.propTypes = {
    qtLikes: PropTypes.number
}

export function Tweet(props) {
    // RETORNA um Elemento

    return (
        <article className="tweet">
            <div className="tweet__cabecalho">
                <img className="tweet__fotoUsuario" src={props.usuario.foto} alt="" />
                <span className="tweet__nomeUsuario">{props.usuario.nome} {props.usuario.sobrenome}</span>
                <a href="/"><span className="tweet__userName">@{props.usuario.login}</span></a>
            </div>
            <p onClick={props.onConteudoClicado} className="tweet__conteudo">{ props.children }</p>
            <footer className="tweet__footer">
                <button className="btn btn--clean" onClick={props.onLike}>
                    <svg className={"icon icon--small iconHeart " + (props.likeado ? 'iconHeart--active' : '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                        <defs>
                            <clipPath id="a">
                                <path d="M0 38h38V0H0v38z"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                            <path
                                d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241">
                            </path>
                        </g>
                    </svg>
                    { props.totalLikes }
                </button>
                {
                    props.removivel &&
                    <button onClick={props.removeHandler} className="btn btn--blue btn--remove">
                        X
                    </button>
                }
            </footer>
        </article>
    )
}
