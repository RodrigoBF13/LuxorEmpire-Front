import './index.scss';

//Importando Componentes:
import CompCabecalho from '../../components/cabecalho';
import CompBanner from '../../components/banner';

export default function HomePage() {

    return(
        <div className="pagina-home">
            <CompCabecalho />
            <CompBanner />
        </div>
    )
}