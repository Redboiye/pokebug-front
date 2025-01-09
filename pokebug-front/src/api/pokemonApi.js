import axios from "axios";
import Cookies from "js-cookie";

const getCsrfToken = () => {
    return Cookies.get("csrftoken");
}


const apiBaseURL = "http://127.0.0.1:8000/"

const api = axios.create({
    baseURL: apiBaseURL,
    withCredentials: true,
})

api.interceptors.request.use(config => {
    const csrfToken = getCsrfToken();
    console.log("CSRF token", csrfToken);
    if (csrfToken) {
        config.headers["x-csrftoken"] = csrfToken;
    }
    return config;
})


export const fetchAllPokemons = async () => {
    try {
        const response = await api.get(apiBaseURL + "pokemon");
        return response.data; //varam accesot json ar .data
    } catch (error) {
        console.log("Error fetching pokemon: ", error);
        throw error;
    }


}
export const searchPokemonByName = async (name) => {
    try {
        const response = await api.get(apiBaseURL + "pokemon", {params: {name: name}});
        return response.data; //varam accesot json ar .data
    } catch (error) {
        console.log("Error fetching pokemon: ", error);
        throw error;
    }
}
export const logInUser = async (username, password) => {
    try {
        const response = await api.post(apiBaseURL + "login", {username, password});
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log("User Details: ", response.data);
        return response.data;
    } catch (error) {
        console.log("Error loging in: ", error);
        throw error;
    }
}

export const logOutUser = async () => {
    try {
        const response = await api.post(apiBaseURL + "logout");
        localStorage.removeItem('user');
        return response.data;
    } catch (error) {
        console.log("Error: ", error);
        throw error;
    }
};


export const toggleFavorite = async (pokemonId, userId) => {
    try {
        const response = await api.post(
            `${apiBaseURL}pokemon/${pokemonId}/favorite/`,
            {user_id: userId},
            {headers: {"x-csrftoken": getCsrfToken()}}
        );

        return response.data;
    } catch (error) {
        console.error('Error toggling favorite:', error);
        throw error;
    }
};

//async process, kas darbojas paraleli,
// nekavejot parejas komandas darbibu.
// katru reizi kad gribam nofechot no endpointiem mums ir jaizmanto try/catch bloki,
// python try/except.
// wait ir dala no async darbibas. sagaidit atbildi. throw izmet error, bet kodu nenobrucina.
// params - parametri.
// deps - depensijs