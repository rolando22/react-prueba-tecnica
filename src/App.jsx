import { useEffect, useState } from "react";

import './App.css';

const CAT_ENDPOINT = 'https://cataas.com';
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {
    const [fact, setFact] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const getRandomFact = async () => {
        try {
            const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
            const json = await response.json();
            const { fact } = json;
            setFact(fact);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRandomFact();
    }, []);

    useEffect(() => {
        const getRandomImg = async () => {
            try {
                const firstWord = fact.split(' ')[0];
                const response = await fetch(`https://cataas.com/cat/says/${firstWord}?json=true`);
                const json = await response.json();
                const { url } = json;
                setImgUrl(url);
            } catch (error) {
                console.log(error);
            }
        };

        getRandomImg();
    }, [fact]);

    const handlerClick = () => {
        getRandomFact();
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
