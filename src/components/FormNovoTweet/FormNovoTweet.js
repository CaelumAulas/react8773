import React, { useState } from 'react'

import './novoTweet.css'

export function FormNovoTweet(props) {
    const [ textoTweet, setTextoTweet ] = useState("")

    function onTextareaChange(evento) {
        const $textArea = evento.target
        setTextoTweet($textArea.value)
    }

    function onFormSubmit(evento) {
        evento.preventDefault()
        // Aqui tem que adicionar um tweet. Mas é no estado de algum componente parente, não aqui.
        props.onNovoTweet(textoTweet)
    }

    const isTweetInvalido = textoTweet.length > 140
    const classeStatus = "novoTweet__status " +  (isTweetInvalido ? "novoTweet__status--invalido" : "")

    return (
        <form className="novoTweet" onSubmit={ onFormSubmit }>
            <div className="novoTweet__editorArea">
                <span className={ classeStatus }>{ textoTweet.length }/140</span>
                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?" onChange={ onTextareaChange }></textarea>
            </div>
            <button disabled={ isTweetInvalido }  type="submit" className="novoTweet__envia">Tweetar</button>
        </form>
    )
}