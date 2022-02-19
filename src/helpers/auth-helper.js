/*
    função para gravar dados na 
    LOCAL STORAGE do navegador
*/
export const signIn = (data) => {
    localStorage.setItem(
        'USER_AUTH',
        JSON.stringify(data)
    );
}

/*
    função para retornar o nome do usuário
    gravado na local storage
*/
export const getNomeUsuario = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).usuario;
}

/*
    função para retornar o email do usuário
    gravado na local storage
*/
export const getEmailUsuario = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).email;
}

/*
    função para retornar o access token
    gravado na local storage
*/
export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem('USER_AUTH')).accessToken;
}

/*
    função para apagar o conteúdo
    gravado na local storage
*/
export const signOut = () => {
    return localStorage.removeItem('USER_AUTH');
}

/*
    função para verificar se o usuário
    está autenticado na API
*/
export const isLoggedIn = () => {
    return localStorage.getItem('USER_AUTH') != null;
}

