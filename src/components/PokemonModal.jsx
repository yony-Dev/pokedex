export function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <img
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
          className="modal-img"
        />
        <h2 className="modal-name">{pokemon.name}</h2>

        <div className="modal-types">
          {pokemon.types?.map(({ type }) => (
            <span key={type.name} className={`type-badge ${type.name}`}>
              {type.name}
            </span>
          ))}
        </div>

        <div className="modal-stats">
          {pokemon.stats?.map(({ stat, base_stat }) => (
            <div key={stat.name} className="stat-row">
              <span className="stat-name">{stat.name}</span>
              <div className="stat-bar">
                <div
                  className="stat-fill"
                  style={{ width: `${(base_stat / 255) * 100}%` }}
                />
              </div>
              <span className="stat-value">{base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}