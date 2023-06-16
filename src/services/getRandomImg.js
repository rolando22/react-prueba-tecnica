export const getRandomImg = async ({ fact }) => {
    const firstWord = fact.split(' ')[0];
    const response = await fetch(`https://cataas.com/cat/says/${firstWord}?json=true`);
    const json = await response.json();
    const { url } = json;
    return url;
};
