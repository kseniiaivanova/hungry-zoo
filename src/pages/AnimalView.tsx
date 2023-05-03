import { Animal, IAnimal } from "../components/Animal";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router";
import { useState } from "react";
import { DateTime } from "luxon";

export const AnimalView = () => {

    const params = useParams();
    const [lastFed, setLastFed] = useState<string | null>(null);
    const [animals, setAnimals] = useState<IAnimal[]>(JSON.parse(localStorage.getItem('animals') || "[]"));


    const currentAnimal =
        animals.find((animal) => animal.id.toString() === params.id);


    const handleClick = () => {

        if (currentAnimal?.isFed !== undefined) {



            const updatedAnimals = animals.map((animal) =>
                animal.id.toString() === params.id ? { ...animal, isFed: true } : animal
            );

            setLastFed(DateTime.local().toISO());
            setAnimals(updatedAnimals);


            localStorage.setItem('animals', JSON.stringify(updatedAnimals));

        }

    };

    if (currentAnimal === undefined) {
        return <h1>Choose an animal!</h1>;
    } else {
        return (
            <>
                <Navbar></Navbar>

                <Animal {...currentAnimal} fullDescription={true} lastFed={lastFed || currentAnimal.lastFed}></Animal>
                <button onClick={handleClick} disabled={currentAnimal.isFed}>Mata mig!</button>
            </>
        );
    }

}