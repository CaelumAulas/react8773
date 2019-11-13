const URL_API = process.env.REACT_APP_URL_API

let TOKEN = localStorage.getItem('TOKEN')

export function getToken() {
    return TOKEN
}

export function isAutenticado() {
    // Login inocente
    return TOKEN !== null
}

export async function logar(usuario, senha) {
    if(TOKEN === null) {
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
            TOKEN = tokenLogin
            localStorage.setItem('TOKEN', tokenLogin)
            return tokenLogin
        }
    
        throw new Error("Token não encontrado")
    }
}