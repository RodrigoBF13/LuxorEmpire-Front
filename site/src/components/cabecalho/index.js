import './index.scss';

import {Link} from 'react-router-dom'

export default function CompCabecalho() {

    return(
        <div className="comp-cabecalho">
            <header className='cabecalho'>

                <div id='pesquisar'>
                    <button>
                        <img src="/assets/images/home/Lupa.png" alt="Botão Buscar" />
                    </button>
                    <input type="text" placeholder='Pesquisar' />
                </div>

                <Link to='/'>
                    <img src="/assets/images/home/01Slogan.png" alt="Logo Site" id='logoheader'/>
                </Link>

                <div id='menuheader'>
                    <Link to='/'>
                        <img src="/assets/images/home/Usuario.png" alt="Usuário Icon" />
                        <h1>MINHA CONTA</h1>
                    </Link>

                    <Link to='/'>
                        <img src="/assets/images/home/Compras.png" alt="Compras Icon" />
                        <h1>MEU CARRINHO</h1>
                    </Link>

                    <Link to='/'>
                        <img src="/assets/images/home/Suporte.png" alt="Suporte Icon" />
                        <h1>SUPORTE</h1>
                    </Link>
                </div>
            </header>


            <nav className='selectnav'>
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