import './index.scss';

import { Link } from 'react-router-dom';

export default function CompProdutoHome() {

    return (
        <div className='comp-produto-home'>
            <Link to='/'>
                <img src="https://www.waufen.com.br/wp-content/uploads/2020/04/colar-gotinha-rubi-dourado-semijoias.jpg" alt="Imagem Produto" />
                <h1>Nome Produto</h1>
                <h4>Valor Antigo</h4>
                <h3>Valor Novo</h3>
            </Link>
        </div>
    )
}