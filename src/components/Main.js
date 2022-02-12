import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AcessarConta from './pages/AcessarConta';
import CrieSuaConta from './pages/CrieSuaConta';
import CadastrarContatos from './pages/CadastrarContatos';
import ConsultarContatos from './pages/ConsultarContatos';
import EditarContatos from './pages/EditarContatos';

export default function Main() {
    return (
        <Routes>

            <Route
                path="/"
                exact
                element={<AcessarConta />}
            />

            <Route
                path="/crie-sua-conta"
                element={<CrieSuaConta />}
            />

            <Route
                path="/cadastrar-contatos"
                element={<CadastrarContatos />}
            />

            <Route
                path="/consultar-contatos"
                element={<ConsultarContatos />}
            />

            <Route
                path="/editar-contatos"
                element={<EditarContatos />}
            />

        </Routes>
    )
}