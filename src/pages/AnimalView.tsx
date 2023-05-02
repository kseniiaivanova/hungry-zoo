import { Animal, IAnimal } from "../components/Animal";
import { Navbar } from "../components/Navbar";
import { useParams } from "react-router"

export const AnimalView = () => {

    const params = useParams();
    const animals: IAnimal[] = JSON.parse(localStorage.getItem('animals') || "[]");

    const currentAnimal = animals.find((animal) => animal.id.toString() === params.id);
    console.log(currentAnimal);

    if (currentAnimal === undefined) {
        return <h1>Choose an animal!</h1>;
    } else {
        return (
            <>
                <Navbar></Navbar>

                <Animal {...currentAnimal} fullDescription={true}></Animal>
                <button>Feed me!</button>
            </>
        );
    }

}