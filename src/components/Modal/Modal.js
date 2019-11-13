import React from "react"
import PropTypes from "prop-types"

import "./modal.css"
import { Widget } from "../Widget/Widget.js"

export function Modal(props) {
    function handleBlackAreaClick(infosDoEvento) {
        const isModalTag = infosDoEvento.target.classList.contains('modal')
        if (isModalTag) props.onFechando && props.onFechando()
    }

    return (
        <div
            onClick={handleBlackAreaClick}
            className={'modal ' + (props.isAberto ? 'modalActive' : '')}
        >
            <div>
                <Widget>{props.isAberto && props.children()}</Widget>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isAberto: PropTypes.bool.isRequired,
    onFechando: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
}