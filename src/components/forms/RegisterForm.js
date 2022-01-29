import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as accountServices from '../../services/account-services';
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password-validation';
import textValidation from '../../validations/text-validation';

export default function RegisterForm() {

    //declarando as variáveis do componente (REACT-HOOKS)
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    //declarando os objetos para criação do formulário (REACT HOOK FORM)
    const {
        control, //capturar o valor de cada campo do formulário
        handleSubmit, //capturar o evento de SUBMIT do formulário
        formState: {
            errors //capturar os erros de validação dos campos
        },
        reset //modificar o valor dos campos do formulário (ex: limpar)
    } = useForm();

    //função executada no evento SUBMIT
    const onSubmit = (data) => {

        //limpar as mensagens
        setMensagemSucesso('');
        setMensagemErro('');

        //executando o serviço da API
        accountServices.postRegister(data)
            .then( //callback de sucesso
                result => {

                    setMensagemSucesso(result.message);

                    reset({
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    })
                }
            )
            .catch( //callback de erro
                e => {

                    console.log(e.response)

                    switch (e.response.status) {

                        case 400:
                            setMensagemErro(e.response.data.errors.SenhaConfirmacao[0]);
                            break;

                        case 422:
                            setMensagemErro(e.response.data);
                            break;

                        default:
                            setMensagemErro('Não foi possível realizar a operação.');
                            break;

                    }
                }
            )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* exibir mensagem de sucesso */}
            {
                mensagemSucesso && <div className='alert alert-success'>
                    <strong>Sucesso!</strong> {mensagemSucesso}
                </div>
            }

            {/* exibir mensagem de erro */}
            {
                mensagemErro && <div className='alert alert-danger'>
                    <strong>Erro!</strong> {mensagemErro}
                </div>
            }

            <div className='row mb-3'>
                <div className='col-md-6'>

                    {/* campo para preenchimento do nome */}
                    <label>Nome do Usuário:</label>
                    <Controller
                        control={control}
                        name='nome'
                        defaultValue=''
                        rules={{
                            validate: textValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type='text'
                                    placeholder='Digite aqui'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {/* mensagem de erro de validação */}
                    {
                        errors.nome && <div className='text-danger'>
                            {errors.nome.message}
                        </div>
                    }

                </div>
                <div className='col-md-6'>

                    {/* campo para preenchimento do email */}
                    <label>Email do Usuário:</label>
                    <Controller
                        control={control}
                        name='email'
                        defaultValue=''
                        rules={{
                            validate: emailValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type='email'
                                    placeholder='Digite aqui'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {/* mensagem de erro de validação */}
                    {
                        errors.email && <div className='text-danger'>
                            {errors.email.message}
                        </div>
                    }

                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-6'>

                    {/* campo para preenchimento da senha */}
                    <label>Senha do Usuário:</label>
                    <Controller
                        control={control}
                        name='senha'
                        defaultValue=''
                        rules={{
                            validate: passwordValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type='password'
                                    placeholder='Digite aqui'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {/* mensagem de erro de validação */}
                    {
                        errors.senha && <div className='text-danger'>
                            {errors.senha.message}
                        </div>
                    }

                </div>
                <div className='col-md-6'>

                    {/* campo para preenchimento da confirmação da senha */}
                    <label>Confirme sua Senha:</label>
                    <Controller
                        control={control}
                        name='senhaConfirmacao'
                        defaultValue=''
                        rules={{
                            validate: passwordValidation
                        }}
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type='password'
                                    placeholder='Digite aqui'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />

                    {/* mensagem de erro de validação */}
                    {
                        errors.senhaConfirmacao && <div className='text-danger'>
                            {errors.senhaConfirmacao.message}
                        </div>
                    }

                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-md-12'>
                    <input type='submit' value='Realizar Cadastro'
                        className='btn btn-success' />
                </div>
            </div>

        </form>
    )
}
