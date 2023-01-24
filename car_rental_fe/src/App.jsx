import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/car/Car.css";
import "./components/navbar/Navbar.css";
import CarsList from "./components/car/CarsList";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [cars, setCars] = useState([]);

  const defaultCarUrl = "http://localhost:8080/api/car";

  useEffect(() => {
    fetchCarHandler();
  }, []);

  const fetchCarHandler = () => {
    fetch(defaultCarUrl + "/all")
      .then((response) => response.json())

      .then((data) => {
        setCars(data);
        console.log(data);
      });
  };

  return (
    <div className="app text-center">
      <Navbar />
      <div className="title">
        <div className="title-text">
          <h1>Benvenuti da Car Rental Roma</h1>

          <h1>Da noi portai scegliere tra una vasta gamma di automobili</h1>
        </div>
      </div>

      <div>
        <CarsList cars={cars} />
      </div>
    </div>
  );
}

export default App;
