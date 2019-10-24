import React, { useState, useRef, Fragment } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.js'
import { Widget } from '../../components/Widget/Widget.js'

import './loginPage.css'

import * as LoginService from '../../model/services/LoginService.js'

// Custom hooks
// High Order Function
function useStateBooleano(valorInicial) {
    const [ valorDaVariavel, setValorDaVariavelReact] = useState(valorInicial)

    const setValorDaVariavel = function(valorNovo) {
        if(typeof valorNovo !== "boolean") {
            throw Error("Tipo inválido: " + typeof valorNovo)
        }

        setValorDaVariavelReact(valorNovo)
    }

    return [
        valorDaVariavel,
        setValorDaVariavel
    ]
}

function LoginPage() {
    const [isValido, setIsValido] = useStateBooleano(true)

    const $inputLogin = useRef(null)
    const $inputSenha = useRef(null)

    function onFormSubmit(evento) {
        evento.preventDefault()

        const usuario = $inputLogin.current.value
        const senha = $inputSenha.current.value

        const isValidoSubmit = usuario.length !== 0 && senha.length !== 0

        setIsValido(isValidoSubmit)

        if(isValidoSubmit) {
            LoginService.logar(usuario, senha)
                .catch(error => setIsValido(false))
        }

    }

    return (
        <Fragment>
            <Cabecalho />
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h2 className="loginPage__title">Seja bem vindo!</h2>
                        <form className="loginPage__form" action="/" onSubmit={ onFormSubmit }>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label> 
                                <input ref={$inputLogin} className="loginPage__input" type="text" id="login" name="login"/>
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                <input ref={$inputSenha} className="loginPage__input" type="password" id="senha" name="senha"/>
                            </div>
                            {
                                !isValido
                                    ? <div className="loginPage__errorBox">
                                        Senha ou usuário inválido
                                      </div>
                                    : ''
                            }

                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        </Fragment>
    )
}


export {LoginPage}