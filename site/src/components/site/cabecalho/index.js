import './index.scss';

import {Link} from 'react-router-dom'

export default function CompCabecalho() {

    return(
        <div className="comp-cabecalho">

            <div>
                <div id='search'>
                    <button><img src="/assets/images/cabecalho/Lupa.svg" alt="BtPesquisar" /></button>
                    <input type='text' />
                </div>

                <Link to='/'><img src="/assets/images/cabecalho/Logo.svg" alt="Logo" /></Link>

                <div id='buttons-menu'>
                    <Link to='/'>
                        <img src="/assets/images/cabecalho/Usuario.svg" alt="UserIcon" />
                        Minha Conta
                    </Link>

                    <Link to='/'>
                        <img src="/assets/images/cabecalho/Compras.svg" alt="ComprasIcon" />
                        Meu Carrinho
                    </Link>

                    <Link to='/'>
                        <img src="/assets/images/cabecalho/Suporte.svg" alt="SupportIcon" />
                        Suporte
                    </Link>
                </div>
            </div>  
            <nav id='navegation-bar'>
                <Link to='/'>PACOTES PREMIUM</Link>
                <Link to='/'>JÓIAS</Link>
                <Link to='/'>ACESSÓRIOS</Link>
                <Link to='/'>RELÓGIOS</Link>
                <Link to='/'>LANÇAMENTOS</Link>
                <Link to='/'>MASCULINO</Link>
            </nav>
        </div>
    )
}