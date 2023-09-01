import './index.scss';

import { Link } from 'react-router-dom';

export default function CompBanner() {

    return(
        <div className='comp-banner'>
            <button id='botaoesq'>
                <img src="/assets/images/home/Seta.png" alt="Butão Trocar" />
            </button>
            
            <Link to='/' id='banner'>
                <img src="/assets/images/home/RolexLuxor2.png" alt="Imagem Banner" />
            </Link>

            <button id='botaodir'> 
                <img src="/assets/images/home/Seta.png" alt="Butão Trocar" />
            </button>
        </div>
    )
}