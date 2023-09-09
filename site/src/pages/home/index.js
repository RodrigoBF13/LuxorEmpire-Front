import './index.scss';

//Importando Componentes:
import CompCabecalho from '../../components/cabecalho';
import CompBanner from '../../components/banner';
import CompProdutoHome from '../../components/produtos/home';

import { Link } from 'react-router-dom';

export default function HomePage() {

    return(
        <div className="pagina-home">
            <CompCabecalho />
            <CompBanner />

            <section>
                
            </section>
        </div>
    )
}