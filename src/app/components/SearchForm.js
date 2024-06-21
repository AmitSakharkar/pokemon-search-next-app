// components/SearchForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/type');
      setTypes(response.data.results);
    };
    fetchTypes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ type, search });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col sm:flex-row gap-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="" disabled={true}>All Types</option>
        {types.map((t) => (
          <option key={t.name} value={t.name}>
            {t.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokémon"
        className="p-2 border rounded flex-grow"
      />
      <button type="submit" className="p-2 search-button text-white rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
