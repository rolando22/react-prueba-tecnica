import { useRandomFact, useRandomImg } from './hooks';

import './App.css';

const CAT_ENDPOINT = 'https://cataas.com';

export function App() {
    const { fact, getFact } = useRandomFact();
    const { imgUrl } = useRandomImg({ fact });

    const handlerClick = () => {
        getFact();
    };

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                <p>{fact}</p>
                <img 
                    src={`${CAT_ENDPOINT}${imgUrl}`} 
                    alt={`Imágen obtenida de ${imgUrl} por hecho aleatorio`} 
                />
            </section>
            <button onClick={handlerClick}>Obtener nueva imágen</button>
        </main>
    );
}
