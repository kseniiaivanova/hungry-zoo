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
    <> <div className="listWrapper">
      <Navbar></Navbar>

      {animals.map((animal) => (
        <> 
          <Link key={animal.id} to={animal.id.toString()}>
            <Animal {...animal}></Animal>
            <p className="more">Läs mer</p>
              </Link>
              
        </>
      ))}
          </div>
    </>
  );
};
