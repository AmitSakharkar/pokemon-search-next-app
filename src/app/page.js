"use client";
import React, {useEffect} from 'react';
import SearchForm from './components/SearchForm';
import Pokemon from './pokemon/page';
import usePokemon from './hooks/usePokemon';

const Home = () => {
  const { fetchPokemons} = usePokemon();

  const handleSearch = (filters) => {
    fetchPokemons(filters);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={handleSearch} />
      <Pokemon />
    </div>
  );
};

export default Home;