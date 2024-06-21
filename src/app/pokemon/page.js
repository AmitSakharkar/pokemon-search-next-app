"use client";
import { useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import usePokemon from '../hooks/usePokemon';
import Loading from '../components/Loading/Loading';

const Pokemon = () => {
  const { loading, pokemons, fetchPokemons, pokemonDetails, fetchPokemonData } = usePokemon();
  useEffect(() => {
    fetchPokemons({});
  }, []);

  useEffect(() => {
    console.log('Pokemon useEffect ===> ',pokemons);
    fetchPokemonData(pokemons);
  }, [pokemons]);
  
  console.log('pokemonDetails ===> ', pokemonDetails)
  return (<>
    {loading ? (
      <Loading />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pokemonDetails.length > 0 ? pokemonDetails?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        )):''}
      </div>
    )
    }
  </>);
};

export default Pokemon;