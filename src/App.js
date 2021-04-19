import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function App() {
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    const BASE_URL = 'https://unogsng.p.rapidapi.com/';
    const endPoints = {
        'genres': 'genres',
        'countries': 'countries',
        'people': 'people',
        'search': 'search',
        'titlesdel': 'deleted',
        'title': 'title',
        'titlegenres': 'titlegenres',
        'images': 'images',
        'episodes': 'episodes',
        'titlecountries': 'titlecountries',
        'expiring': 'expiring'
    }

    useEffect(() => {
        async function fetchEndpoints() {
            setError("");
            toggleLoading(true);

            try {
                const response = await axios.get(
                    `${BASE_URL}${endPoints}`, {
                        headers: {
                            "x-rapidapi-key":
                                "5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9",
                            "x-rapidapi-host": "unogsng.p.rapidapi.com",
                        }
                    }
                );
                console.log(response);
            } catch (e) {
                setError("Er is iets mis gegaan bij het ophalen van de data 😢");
                console.error(e);
            }
            toggleLoading(false);
        }

        fetchEndpoints();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {loading && <p>Data wordt geladen...</p>}
        </div>
    );
}

export default App;
