import React from 'react';
import { useRouter } from 'next/navigation';

const PokemonCard = ({ pokemon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pokemon/${pokemon?.name}`);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4">
      <img src={pokemon?.sprites?.other?.['official-artwork']?.front_default} alt={pokemon?.name} className="w-full h-auto rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{pokemon?.name}</h2>
      <a href="#" className="mt-4 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" onClick={handleClick}>
        Details →
      </a>
    </div>
  );
};

export default PokemonCard;
