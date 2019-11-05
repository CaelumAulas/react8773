import React, { useState, useRef, useContext } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.js'
import { Widget } from '../../components/Widget/Widget.js'

import { NotificacaoContexto } from '../../components/NotificacaoProvider/NotificacaoProvider.js'

import './loginPage.css'

import * as LoginService from '../../model/services/LoginService.js'

import { withPermissao } from  '../withPermissao.js'

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

function LoginPageSemAutenticacao(props) {
    const [isValido, setIsValido] = useStateBooleano(true)

    const $inputLogin = useRef(null)
    const $inputSenha = useRef(null)

    const contexto = useContext(NotificacaoContexto)

    function onFormSubmit(evento) {
        evento.preventDefault()

        const usuario = $inputLogin.current.value
        const senha = $inputSenha.current.value

        const isValidoSubmit = usuario.length !== 0 && senha.length !== 0

        setIsValido(isValidoSubmit)

        if(isValidoSubmit) {
            LoginService.logar(usuario, senha)
                .then(() => {
                    contexto.notificar("Logado com sucesso")
                    props.history.push("/")
                })
                .catch(error => setIsValido(false))
        }

    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}


export const LoginPage = withPermissao(LoginPageSemAutenticacao)