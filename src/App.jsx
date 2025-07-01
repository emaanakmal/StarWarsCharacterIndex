import { useState } from 'react'
import Header from "./components/Header"
import Card from "./components/Card"
import Modal from "./components/Modal"
import FetchResults from "./components/FetchResults"

export default function App() {
      const { characters, loading, error } = FetchResults();
      const [selectedCharacter, setSelectedCharacter] = useState(null);

      if (loading) return <div className="loader">Loading...</div>;
      if (error) return <div className="error">{error}</div>;

      return (
        <>
          <Header/>
          <div className="container">
            <div className="card-grid">
              {characters.map((character, index) => (
                <Card
                  key={index}
                  character={character}
                  onClick={() => setSelectedCharacter(character)}
                />
              ))}
            </div>
            <Modal
              character={selectedCharacter}
              show={selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
            />
          </div>
        </>
      );
    };