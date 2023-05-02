import "../components/Animal.scss"
import { SyntheticEvent } from "react";

export interface IAnimal {
    id: number,
    name: string,
    latinName: string,
    yearOfBirth: string,
    shortDescription: string,
    longDescription: string,
    imageUrl: string,
    medicine: string,
    isFed: false,
    lastFed: string

};

export interface IAnimalProps extends IAnimal {
    fullDescription?: boolean;

}

export const Animal = ({
    id,
    name,
    latinName,
    yearOfBirth,
    shortDescription,
    longDescription,
    imageUrl,
    medicine,
    isFed,
    lastFed,
    fullDescription = false

}: IAnimalProps) => {


    const addImageFallback = (event: SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = "https://www.dropbox.com/s/afdbyaej47bo9oi/animals.jpg?raw=1";
    };



    if (fullDescription === false) {
        return (
            <>  <div className="animal">
                <h2>{name}</h2>
                <img src={imageUrl} alt={name} onError={addImageFallback} />
                <p>{shortDescription}</p>

            </div>

            </>
        );
    } else {
        return (
            <>   <div className="animal">
                <h2>{name}</h2>
                <img src={imageUrl} alt={name} />
                <p>{shortDescription}</p>
                <p>{longDescription}</p>
                <p>Latin name: {latinName}</p>
                <p>Year of birth: {yearOfBirth}</p>
                <p>
                    Medicine: {medicine}
                </p>
            </div>
            </>
        );
    }
};