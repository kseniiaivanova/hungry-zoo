import "../components/Animal.scss";
import placeholderImg from "../assets/animals.jpg";
import { SyntheticEvent } from "react";
import { DateTime } from "luxon";

export interface IAnimal {
  id: number;
  name: string;
  latinName: string;
  yearOfBirth: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  medicine: string;
  isFed: boolean;
  lastFed: string;
}

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
  fullDescription = false,
}: IAnimalProps) => {
  const formattedLastFed = DateTime.fromISO(lastFed).toLocaleString(
    DateTime.DATETIME_MED
  );

  const addImageFallback = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = placeholderImg;
  };

  if (fullDescription === false) {
    return (
      <>
        {" "}
        <div className={isFed ? "fed" : "notFed"}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} onError={addImageFallback} />
          <p>{shortDescription}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <div className={isFed ? "fed" : "notFed"}>
          <h2>{name}</h2>
          <img src={imageUrl} alt={name} onError={addImageFallback} />
          <p className="shortDesc">{shortDescription}</p>
          <p>{longDescription}</p>
          <p>Latinskt namn: {latinName}</p>
          <p>Födelseår: {yearOfBirth}</p>
          <p>Medicin: {medicine}</p>
          <p>Senaste utfodring: {formattedLastFed}</p>
        </div>
      </>
    );
  }
};
