import '../styles/PokemonDetails.css'
import {useEffect, useState} from "react";
import {NavigationBar} from "../components/NavigationBar";
import {searchPokemonByName} from "../api/pokemonApi";
import {useParams} from "react-router-dom";

export const PokemonDetails = () => {
    const {name} = useParams();
    console.log("Pokemon Name from URL:", name);
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        console.log("Pokemon Name: ", name)

        const fetchData = async () => {
            try {

                const data = await searchPokemonByName(name);
                console.log("Fetched Pokemon Data: ", data);
                setPokemon(data[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [name])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    return (
        <div className="home">
            <NavigationBar/>
            <h1 className="title-name">PokeBug</h1>
            <div className="row">
                <h1>{pokemon.name}</h1>
                <img className="pokemon-favicon" src={pokemon.favicon} alt="favicon"/>
                <p>{pokemon.description}</p>
                <p>{pokemon.type}</p>


            </div>
        </div>

    )
}


