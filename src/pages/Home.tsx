import { Navbar } from "../components/Navbar";
import placeholderImg from "../assets/animals.jpg";
export const Home = () => {
  return (
    <>
          <Navbar></Navbar>
          <div className="mainWrapper">
          <h1>Välkommen till Zoo</h1>
          <h3>Här kan du se de mest fantastiska djuren från hela världen och lära dig många intressanta fakta om dem!</h3>
              <img className="cover" src={placeholderImg} alt="Our animals" />
              </div>
    </>
  );
};
