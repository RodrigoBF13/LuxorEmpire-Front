import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// Rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Importação de Páginas!
import PaginaLanding from './pages/site/landing';
import AdmCentral from './pages/adm/adm-central';
import AdmLogin from './pages/adm/adm-login';
import Carrinho from './pages/site/carrinho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaLanding />} />
        <Route path='/adm/central' element={<AdmCentral />} />
        <Route path='/adm' element={<AdmLogin />} />
        <Route path='/carrinho' element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
