import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCards";


export const PokemonCardLists = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter,setFilter] = useState([]);

    const getApiData = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            setData(response.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    useEffect(() => {
        if(searchTerm)
        {
            const filterData = data.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilter(filterData);
        }else{
            setFilter(data);
        }
    },[data,searchTerm]);

    return (
       <>
        <div className="search-input">
            <input class="form-control me-2"  placeholder="Search your fav Pokémon" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
        <div className="card-container">
                {filter.length > 0 ? (
                    filter.map((pokemon, index) => (
                        <PokemonCards key={index} pokemon={pokemon} />
                    ))
                ) : (
                    <p>No Pokémon found</p>
                )}
        </div>
       </>
    );
};
