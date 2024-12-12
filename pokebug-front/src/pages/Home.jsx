import '../styles/Home.css';
import {useEffect, useState} from "react";
import {NavigationBar} from "../components/NavigationBar";
import {fetchAllPokemons} from "../api/pokemonApi";
import {Link} from "react-router-dom";

export const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllPokemons();
                setPokemonList(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="home">
            <NavigationBar/>
            <h1 className="page-title">PokeBug</h1>
            <div className="pokemon-list-container">
                <ul className="pokemon-list">
                    {pokemonList.map((pokemon, index) => (
                        <li key={pokemon.name}  className="pokemon-item">
                            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
                                {index + 1 + "."} {pokemon.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

