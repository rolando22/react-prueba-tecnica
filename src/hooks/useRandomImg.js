import { useEffect, useState } from "react";

import { getRandomImg } from '../services/getRandomImg';

export function useRandomImg({ fact }) {
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        const getImg = async () => {
            try {
                const url = await getRandomImg({ fact });
                setImgUrl(url);
            } catch (error) {
                console.log(error);
                setImgUrl('');
            }
        };

        getImg();
    }, [fact]);

    return { imgUrl };
}
