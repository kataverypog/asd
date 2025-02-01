import axios from 'axios'
import { useEffect, useState } from "react";
import CardImg from './CardImg.jsx';

const Card = () => {
    const [poks, setPoks] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(response => {
                setPoks(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className={'container flex flex-wrap gap-x-10 gap-y-5 items-center pt-4 pl-4'}>
            {poks.map((pok) => (
                <div className={'w-1/4 bg-cyan-300 rounded-md shadow-xl shadow-zinc-400 flex justify-around items-center '}>
                    <CardImg name={pok.name}/>
                    <span>{pok.name}</span>
                </div>
            ))}
        </div>
    );
};

export default Card;