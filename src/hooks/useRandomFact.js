import { useEffect, useState } from "react";

import { getRandomFact }  from '../services/getRandomFact';

export function useRandomFact() {
    const [fact, setFact] = useState('');

    const getFact = async () => {
        try {
            const randomFact = await getRandomFact();
            setFact(randomFact);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFact();
    }, []); 

    return { fact, getFact };
}
