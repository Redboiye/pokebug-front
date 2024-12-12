import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {PokemonDetails} from "./pages/PokemonDetails";
import {Register} from "./pages/Register";
import {Favorites} from "./pages/Favorites";


export const App = () => {
    return (
        <Router>


            <Routes>
                <Route path="/" element={<Home name="PokeBug"/>}/>
                <Route path="/pokemon/:name" element={<PokemonDetails name="About Pokemon"/>}/>
                <Route path="/register" element={<Register name="Register"/>}/>
                <Route path="/favorites" element={<Favorites name="Favorites"/>}/>


            </Routes>
        </Router>
    );
};
