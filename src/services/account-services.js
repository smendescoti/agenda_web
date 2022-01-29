import axios from "axios";
import * as config from '../config/api-config';

//função para fazer uma requisição para o endpoint de login
export const postLogin = (data) => {
    //utilizando o AXIOS para fazer a requisição para a API
    return axios.post(
        `${config.getApiUrl()}/Account/Login`,
        data /* dados submetidos para a API (Request Body) */
    ).then(
        //Capturar e retornar a resposta da API
        response => {
            return response.data;
        }
    )
}

//função para fazer uma requisição para o endpoint de cadastro de conta de usuário
export const postRegister = (data) => {
    //utilizando o AXIOS para fazer a requisição para a API
    return axios.post(
        `${config.getApiUrl()}/Account/Register`,
        data /* dados submetidos para a API (Request Body) */
    ).then(
        //Capturar e retornar a resposta da API
        response => {
            return response.data;
        }
    )
}