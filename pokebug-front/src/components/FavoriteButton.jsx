import React, {useState} from 'react';
import {toggleFavorite} from "../api/pokemonApi";

const FavoriteButton = ({pokemonId, isFavorite = false}) => {
    const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
    const [loading, setLoading] = useState(false);

    const handleFavoriteToggle = async () => {
        setLoading(true);
        try {
            const user = localStorage.getItem("user")
            const result = await toggleFavorite(pokemonId, user);
            console.log("Favorite toggle result:", result);
            setFavoriteStatus(result);
        } catch (error) {
            console.error("Error toggling favorite status:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleFavoriteToggle}
            disabled={loading}
            className={`favorite-button ${favoriteStatus ? 'favorite1' : ''}`}
        >
            {loading ? "Processing" : favoriteStatus ? "favorite0" : "Favorite"}
        </button>
    );
};

export default FavoriteButton;