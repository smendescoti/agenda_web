import React, { useState, useEffect } from 'react';
import * as contatosService from '../../services/contatos-services';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';

export default function ConsultarContatosGrid() {

    //declarando variáveis no componente
    const [contatos, setContatos] = useState([]);

    //função para consultar os contatos na API
    const consultarContatos = () => {
        contatosService.getContatos()
            .then(
                result => {

                    //inicializando o datatable
                    $(document).ready(function(){
                        $("#tabela").DataTable({
                            language: {
                                url : 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Portuguese-Brasil.json'
                            }
                        })
                    });

                    setContatos(result);
                }
            )
            .catch(
                e => {
                    console.log(e.response);
                }
            )
    }

    //evento do REACT HOOKS para execução
    //no momento do carregamento do componente
    useEffect(
        () => {
            consultarContatos();
        }, []
    )

    return (
        <div>
            <table id="tabela" className='table table-hover table-sm'>
                <thead>
                    <tr>
                        <th>Nome do Contato</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contatos.map(
                            function (contato, i) {
                                return (
                                    <tr key={i}>
                                        <td>{contato.nome}</td>
                                        <td>{contato.email}</td>
                                        <td>{contato.telefone}</td>
                                        <td>
                                            <a href='#' className='btn btn-primary btn-sm'>
                                                Alterar
                                            </a>
                                            &nbsp;
                                            <a href='#' className='btn btn-danger btn-sm'>
                                                Excluir
                                            </a>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}