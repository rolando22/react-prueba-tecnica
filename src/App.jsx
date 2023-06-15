import { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export function App() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        const getRandomFact = async () => {
            try {
                const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
                const json = await response.json();
                const { fact } = json;
                setFact(fact);
                return fact
            } catch (error) {
                console.log(error);
            }
        };

        getRandomFact();
    }, []);

    return (
        <main>
            <h1>App de gatitos</h1>
            <p>{fact}</p>
        </main>
    );
}
