import React, { useState, useRef, Fragment } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.js'
import { Widget } from '../../components/Widget/Widget.js'

import './loginPage.css'

function LoginPage() {

    const [isValido, setIsValido] = useState(true)

    const $inputLogin = useRef(null)
    const $inputSenha = useRef(null)

    function onFormSubmit(evento) {
        evento.preventDefault()

        const usuario = $inputLogin.current.value
        const senha = $inputSenha.current.value

        const isValidoSubmit = usuario.length !== 0 && senha.length !== 0

        setIsValido(isValidoSubmit)
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
                                        Senha ou usuário vazio
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