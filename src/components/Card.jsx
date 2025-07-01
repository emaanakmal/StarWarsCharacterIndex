export default function Card({ character, onClick }) {
    const speciesColors = {
    human: '#dfa98f',
    droid: '#C0C0C0',
    wookiee: '#a0522d',
    hutt: '#4a5d23',    
    rodian: '#89bff8',
    umbaran: '#3f5277'
    };
    const backgroundColor = speciesColors[character.species] || 'white';
    return (
    <div className="card" style={{ backgroundColor: backgroundColor }} onClick={onClick}>
        <img src={character.image ?? `https://picsum.photos/200/300?random=${character.id}`} alt={character.name}/>
        <h3>{character.name}</h3>
    </div>
    );
};
