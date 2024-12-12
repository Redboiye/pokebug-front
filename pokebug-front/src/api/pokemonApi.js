import axios from "axios";


const apiBaseURL = "http://127.0.0.1:8000/pokemon/"
export const fetchAllPokemons = async () => {
    try {
        const response = await axios.get(apiBaseURL);
        return response.data; //varam accesot json ar .data
    } catch(error) {
        console.log("Error fetching pokemon: ", error);
        throw error;
    }



}
export const searchPokemonByName = async (name) => {
    try {
        const response = await axios.get(apiBaseURL, {params: {name: name}});
        return response.data; //varam accesot json ar .data
    } catch(error) {
        console.log("Error fetching pokemon: ", error);
        throw error;
    }
}

//async process, kas darbojas paraleli,
// nekavejot parejas komandas darbibu.
// katru reizi kad gribam nofechot no endpointiem mums ir jaizmanto try/catch bloki,
// python try/except.
// wait ir dala no async darbibas. sagaidit atbildi. throw izmet error, bet kodu nenobrucina.
// params - parametri.
// deps - depensijs