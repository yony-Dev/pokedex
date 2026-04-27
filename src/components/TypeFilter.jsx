const TYPE_CONFIG = {
  Todos:    { color: "#A8A8A8", bg: "#2a2a3e", icon: "★" },
  Fire:     { color: "#FF9C54", bg: "#3d1f0a", icon: "🔥" },
  Water:    { color: "#4D90D5", bg: "#0a1f3d", icon: "💧" },
  Grass:    { color: "#63BB5B", bg: "#0f2d0a", icon: "🌿" },
  Electric: { color: "#F4D23C", bg: "#3d310a", icon: "⚡" },
  Psychic:  { color: "#F97176", bg: "#3d0a1f", icon: "🔮" },
  Ice:      { color: "#74CEC0", bg: "#0a2d3d", icon: "❄️" },
  Dragon:   { color: "#6F35FC", bg: "#1a0a3d", icon: "🐉" },
  Dark:     { color: "#5A5465", bg: "#1a1a2e", icon: "🌑" },
  Fairy:    { color: "#EC8FE6", bg: "#3d0a3d", icon: "✨" },
  Normal:   { color: "#9099A1", bg: "#252535", icon: "◯" },
  Fighting: { color: "#CE416B", bg: "#3d0a1a", icon: "👊" },
  Poison:   { color: "#AB6AC8", bg: "#250a3d", icon: "☠" },
  Ground:   { color: "#D97746", bg: "#3d200a", icon: "⛰" },
  Flying:   { color: "#89AAE3", bg: "#0a1a3d", icon: "🌬" },
  Bug:      { color: "#90C12C", bg: "#1a2d0a", icon: "🐛" },
  Rock:     { color: "#C9BB8A", bg: "#2d250a", icon: "🪨" },
  Ghost:    { color: "#5269AC", bg: "#0a0f2d", icon: "👻" },
  Steel:    { color: "#5A8EA2", bg: "#0a1f2d", icon: "⚙" },
};

export function TypeFilter({ selectedType, onTypeChange }) {
  return (
    <div className="type-filter-wrapper">
      <div className="type-filter-scroll">
        {Object.entries(TYPE_CONFIG).map(([type, { color, bg, icon }]) => {
          const isActive = selectedType === type;
          return (
            <button
              key={type}
              className={`type-pill ${isActive ? "active" : ""}`}
              onClick={() => onTypeChange(type)}
              style={{
                "--type-color": color,
                "--type-bg": bg,
              }}
            >
              <span className="type-icon">{icon}</span>
              <span className="type-name">{type}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}