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