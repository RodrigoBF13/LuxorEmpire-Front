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

            <section className='blockssect'>
                <Link to=''>
                    <img src="/assets/images/home/Relógios.png" alt="Relógio Block" />
                    <h1>RELÓGIOS</h1>
                </Link>

                <Link to=''>
                    <img src="/assets/images/home/Colares.png" alt="Pingente Block" />
                    <h1>PINGENTES</h1>
                </Link>

                <Link to=''>
                    <img src="/assets/images/home/Brincos.png" alt="Brinco Block" />
                    <h1>BRINCOS</h1>
                </Link>
            </section>

            <section className='prod'>
                <h1>Celebre o Amor</h1>
                <p>A jóia perfeita para presentear a pessoa perfeita.</p>

                <div className='produtos'>
                    <button className='botao-esquerda'>
                        <img src="/assets/images/home/Seta.png" alt="Botão Trocar" />
                    </button>

                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                    


                    <button className='botao-direita'>
                        <img src="/assets/images/home/Seta.png" alt="Botão Trocar" />
                    </button>
                </div>
            </section>

            <hr/>

            <section className='pacotes'>
                <h1>Pacote Afrodite</h1>

                <div className='produtos'>
                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                </div>
                <button>Descubra mais</button>
            </section>

            <hr/>

            <section className='pacotes'>
                <h1>Pacote Lágrima dos Deuses</h1>

                <div className='produtos'>
                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                    <CompProdutoHome />
                </div>
                <button>Descubra mais</button>
            </section>
        </div>
    )
}