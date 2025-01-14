import './index.scss';
import { useState } from 'react';
import LoginUser from '../user-login';
import RegisterUser from '../user-register';

import {Link} from 'react-router-dom'

export default function CompCabecalho() {
    const [mostrarComponente1, setMostrarComponente1] = useState(true);

    const trocarComponente = () => {
        setMostrarComponente1(!mostrarComponente1);
    };



    const [abrirRegistro, setAbrirRegistro] = useState(false);

    const abrirReg = () => {
        setAbrirRegistro(true);
    }

    const fecharReg = () => {
        setAbrirRegistro(false);
    }

    return(
        <div className="comp-cabecalho">

            <div>
                <div id='search'>
                    <button><img src="/assets/images/cabecalho/Lupa.svg" alt="BtPesquisar" /></button>
                    <input type='text' />
                </div>

                <Link to='/'><img src="/assets/images/cabecalho/Logo.svg" alt="Logo" /></Link>

                <div id='buttons-menu'>
                    <button onClick={abrirReg}>
                        <img src="/assets/images/cabecalho/Usuario.svg" alt="UserIcon" />
                        Minha Conta
                    </button>

                    <button>
                        <img src="/assets/images/cabecalho/Compras.svg" alt="ComprasIcon" />
                        Meu Carrinho
                    </button>

                    <button>
                        <img src="/assets/images/cabecalho/Suporte.svg" alt="SupportIcon" />
                        Suporte
                    </button>
                </div>
            </div>  
            <nav id='navegation-bar'>
                <Link to='/'>PACOTES PREMIUM</Link>
                <Link to='/'>JÓIAS</Link>
                <Link to='/'>ACESSÓRIOS</Link>
                <Link to='/'>RELÓGIOS</Link>
                <Link to='/'>LANÇAMENTOS</Link>
                <Link to='/'>MASCULINO</Link>
                    {mostrarComponente1 
                        ? (
                            <RegisterUser isOpen={abrirRegistro} onClose={fecharReg} trocar={trocarComponente}/>
                            
                        ) 
                        : (
                            <LoginUser isOpen={abrirRegistro} onClose={fecharReg} trocar={trocarComponente}/>
                        )
                    }
            </nav>
        </div>
    )
}