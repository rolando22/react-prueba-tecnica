const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const json = await response.json();
    const { fact } = json;
    return fact
};