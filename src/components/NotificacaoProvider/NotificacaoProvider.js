import React, { createContext, useState, useEffect } from 'react'

export const NotificacaoContexto = createContext({
    notificar: () => {}
})

export function NotificacaoProvider(props) {

    const [msg, setMsg] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setMsg("")
        }, 2000)
    })

    return (
        <NotificacaoContexto.Provider value={{notificar: setMsg}}>
            { props.children }

            {msg
                ? <div class="notificacaoMsg"> { msg } </div>
                : ''
            }
        </NotificacaoContexto.Provider>
    )
}
