export default function Modal({ character, show, onClose }) {
      if (!show || !character) return null;

      let masters = 'None'
      
      if (character.masters && character.masters.length > 1) {
        masters = character.masters.map(item => <p key = {item}>{item}</p>)
      }
      else if (character.masters && !character.masters.length){
        masters = character.masters;
      }

      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={onClose}>Close</button>
            <h2>{character.name}</h2>
            <p>Height: {(character.height / 100).toFixed(2)} meters</p>
            <p>Mass: {character.mass} kg</p>
            <p>Birth Year: {character.born}</p>
            <p>Gender: {character.gender}</p>
            <p>Homeworld: {character.homeworld}</p>
            <div>Masters: {masters}</div>
          </div>
        </div>
      );
};