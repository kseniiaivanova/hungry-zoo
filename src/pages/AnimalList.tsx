import axios from "axios";
import { useState, useEffect } from 'react';
import { IAnimal } from "../components/Animal";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { Animal } from "../components/Animal";

export const AnimalList = () => {
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    useEffect(() => {
        axios.get<IAnimal[]>("https://animals.azurewebsites.net/api/animals").then(response => setAnimals(response.data)).catch(error => console.log(error));
    }, []);

    localStorage.setItem("animals", JSON.stringify(animals));


    return (
        <>
            <Navbar></Navbar>

            {animals.map((animal, index) => (
                <>
                    <Link key={index} to={animal.id.toString()}>
                        <Animal {...animal}></Animal>
                    </Link>

                </>
            ))}
        </>
    );
}