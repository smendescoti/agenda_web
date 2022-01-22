import axios from "axios";

//função para fazer uma requisição para o endpoint de login
export const postLogin = (data) => {
    //utilizando o AXIOS para fazer a requisição para a API
    return axios.post(
        'http://projetocontatos1-001-site1.itempurl.com/api/Account/Login',
        data /* dados submetidos para a API (Request Body) */
    ).then(
        //Capturar e retornar a resposta da API
        response => {
            return response.data;
        }
    )
}