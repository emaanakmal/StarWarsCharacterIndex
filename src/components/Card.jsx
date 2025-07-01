export default function Card({ character, onClick }) {
    const speciesColors = {
    'Human': '#f0f0f0',
    'Droid': '#d3d3d3',
    'Wookiee': '#a0522d'
    };
    const backgroundColor = speciesColors[character.species[0]] || '#ffffff';

    return (
    <div className="card" style={{ 'backgroundColor': backgroundColor }} onClick={onClick}>
        <img src={`https://picsum.photos/200/300?random=${character.id}`} alt={character.name}/>
        <h3>{character.name}</h3>
    </div>
    );
};
