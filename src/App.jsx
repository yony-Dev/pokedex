import { useState } from "react";
import { usePokemon } from "./hooks/usePokemon";
import { PokemonCard } from "./components/PokemonCard";
import { SearchBar } from "./components/SearchBar";
import { TypeFilter } from "./components/TypeFilter";       
import { PokemonModal } from "./components/PokemonModal";   
import "./App.css";

function App() {
  const { pokemonList, loading, error } = usePokemon(150);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("Todos");       
  const [selectedPokemon, setSelectedPokemon] = useState(null);    

  const filtered = pokemonList
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {                                              
      if (selectedType === "Todos") return true;
      return p.types?.some(({ type }) =>
        type.name.toLowerCase() === selectedType.toLowerCase()
      );
    });

  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="app">
      <header>
        <h1>Pokédex</h1>
        <SearchBar value={search} onChange={setSearch} />
        <TypeFilter                                                
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      </header>

      {loading ? (
        <div className="loading">Cargando Pokémon...</div>
      ) : (
        <main className="grid">
          {filtered.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={setSelectedPokemon}   
            />
          ))}
        </main>
      )}

      <PokemonModal                                                 
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </div>
  );
}

export default App;