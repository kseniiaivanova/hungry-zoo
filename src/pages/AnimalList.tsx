import axios from "axios";
import { useState, useEffect } from "react";
import { IAnimal } from "../components/Animal";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import { Animal } from "../components/Animal";

export const AnimalList = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("animals") || "[]")
  );

  useEffect(() => {
    if (animals.length === 0) {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          setAnimals(response.data);
          localStorage.setItem("animals", JSON.stringify(response.data));
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <h1>Djuren</h1>
      <div className="listWrapper">
        {animals.map((animal) => (
  <div className="showAnimal" key={animal.id}>
    <Animal {...animal} />
    <Link to={animal.id.toString()}>
      <p className="more">Läs mer</p>
    </Link>
  </div>
))}

      </div>
    </>
  );
};
