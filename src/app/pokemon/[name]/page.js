"use client";
import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import usePokemon from '../../hooks/usePokemon';
import Loading from '@/app/components/Loading/Loading';
const PokemonDetailsCard = ({ params }) => {
  const { selectedPokemonData, selectedPokemonDataLoading, fetchSelectedPokemon } = usePokemon();

  useEffect(() => {
    fetchSelectedPokemon(params.name);
  }, []);

  return (
    <div className="container mx-auto p-4 justify-center items-center">
      <Breadcrumb paths={[{ name: 'Home', href: '/' }, { name: selectedPokemonData?.name, href: `/pokemon/${params?.name}` }]} />
      <div className="bg-cyan-400 p-4 rounded-lg shadow-lg">
        {selectedPokemonDataLoading ? <Loading /> :
          <><img
            src={selectedPokemonData?.sprites?.other?.['official-artwork']?.front_default}
            alt={selectedPokemonData?.name}
            className="w-full h-48 rounded-lg object-contain"
          />
            <div className="bg-yellow-400 p-4 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Name: </strong>{selectedPokemonData?.name}</p>
              <p className="text-gray-700">
                <strong>Type: </strong>{selectedPokemonData?.types?.map((type, index) => (
                  <span key={index}>{type.type.name}{index < selectedPokemonData?.types?.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
              <p className="text-gray-700">
                <strong>Stats: </strong>{selectedPokemonData?.stats?.map((stat, index) => (
                  <span key={index}>{stat.stat.name}{index < selectedPokemonData?.stats.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
              <p className="text-gray-700">
                <strong>Abilities: </strong>{selectedPokemonData?.abilities?.map((ability, index) => (
                  <span key={index}>{ability.ability.name}{index < selectedPokemonData?.abilities.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
              <p className="text-gray-700">
                <strong>Some Moves: </strong>{selectedPokemonData?.moves?.map((move, index) => (
                  <span key={index}>{move.move.name}{index < selectedPokemonData?.moves.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            </div>
          </>}
      </div>
    </div>
  );
};
export default PokemonDetailsCard;
