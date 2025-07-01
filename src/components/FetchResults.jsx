import React, { useState, useEffect } from 'react';
    
const URL = "https://akabab.github.io/starwars-api/api/all.json";

export default function FetchResults() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(URL)
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error("Failed to fetch characters. Try again.", error))
            setLoading(false);
        };

        fetchData();
    }, []);

    return { characters, loading, error };
};