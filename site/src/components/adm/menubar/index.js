import './index.scss';

import {Link} from 'react-router-dom'

export default function CompMenuBar() {

    return (
        <div className="comp-menu-bar">
            <div id='adm-profile'>
                <img src="/assets/images/cabecalho/Usuario.svg" alt="" />
                <div>
                    <h1>Admin Name</h1>
                    <button>Editar Perfil</button>
                </div>
            </div>
            <img src="/assets/images/rodape/LogoResu.svg" alt="" id='logoadm'/>


            <Link to='' className='btmn'>
                <img src="/assets/images/menubar/house-vector-icon.svg" alt="" />
                Central
            </Link>

            <Link to='' className='btmn'>
                <img src="/assets/images/menubar/2652218.svg" alt="" />
                Produtos
            </Link>

            <Link to='' className='btmn'>
                <img src="/assets/images/menubar/126391.svg" alt="" />
                Ferramentas
            </Link>
        </div>
    )
}