import "../components/Animal.scss"

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
    if (fullDescription === false) {
        return (
            <>  <div className="animal">
                <h2>{name}</h2>
                <img src={imageUrl} alt={name} />
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