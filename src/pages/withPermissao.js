import React from 'react'

import { Redirect } from 'react-router-dom'

export function withPermissao(Componente) {
    return function ComponentePaginaComPermissao(props) {
        const {children, isAcessoPermitido, redirectPermissaoNegada, ...outrasProps} = props

        if(isAcessoPermitido){
            return (
                <Componente {...outrasProps} >
                    { props.children }
                </Componente>
            )
        } else {
            return <Redirect to={ redirectPermissaoNegada } />
        }
    }

}