import { useEffect, useState } from "react";
import axios from "axios";

const CardImg = ({ name }) => {
    const [pok, setPok] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                setPok(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [name]);

    return (
        <div>
            {pok && <img src={pok.sprites.front_default} alt={pok.name} />}
        </div>
    );
};

export default CardImg;
