import React, { useState, useEffect } from 'react';

const Fetch = () => {
    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            .then(data => setPokemon(data.results)) 
            .catch(err => console.error(err));
    }, []); 

    return (
        <div>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>{index + 1} || {pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Fetch;
