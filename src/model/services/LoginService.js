const URL_API = process.env.REACT_APP_URL_API

export async function logar(usuario, senha) {
    const response = await fetch(URL_API + '/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ login: usuario, senha})
    })

    if(!response.ok) {
        const erroServidor = await (response.json())
        const erroJS = Error(erroServidor.message) 
        erroJS.status = response.status
        throw erroJS
    }

    
    const loginInfoServidor = await response.json()

    const tokenLogin = loginInfoServidor.token


    if(tokenLogin) {
        localStorage.setItem('TOKEN', tokenLogin)
        return tokenLogin
    }

    throw new Error("Token não encontrado")
}