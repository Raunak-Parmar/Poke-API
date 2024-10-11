export const PokemonCards = ({pokemon}) => {
    return (
      <div className="card">
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`} alt={pokemon.name} />
      </div>
  );
}
