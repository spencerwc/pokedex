export const typeColors: { [key: string]: string } = {
    bug: '#99C32E',
    dark: '#5F5A6B',
    dragon: '#086CC0',
    electric: '#F4D644',
    fairy: '#EB92E5',
    fighting: '#D34364',
    fire: '#FEA152',
    flying: '#93ADDF',
    ghost: '#5F6CBA',
    grass: '#5CBB57',
    ground: '#D97F4D',
    ice: '#79D1C6',
    normal: '#919B9F',
    poison: '#A965C7',
    psychic: '#F77277',
    rock: '#C8B88B',
    steel: '#548D9E',
    water: '#59A0DB',
};

export const formatPokemonID = (id: number) => {
    const stringId = `${id}`;
    return stringId.padStart(3, '0');
};

export const formatText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
