import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/car/Car.css";
import "./components/navbar/Navbar.css";
import CarsList from "./components/car/CarsList";
import Navbar from "./components/navbar/Navbar";
import { FadeIn } from "react-slide-fade-in";

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
          <FadeIn
            from="left"
            positionOffset={100}
            triggerOffset={200}
            delayInMilliseconds={500}
          >
            <h1>Benvenuti </h1>
          </FadeIn>
          <h1 className="car-rental-roma">CAR RENTAL ROMA</h1>
          <FadeIn
            from="right"
            positionOffset={100}
            triggerOffset={100}
            delayInMilliseconds={2000}
          >
            <h1>
              Vi offre la possibilità di scegliere tra una vasta gamma di
              automobili
            </h1>
          </FadeIn>
        </div>
      </div>
      <div>
        <h1 className="parco-auto-text">Il nostro parco auto</h1>
      </div>
      <FadeIn
        from="bottom"
        positionOffset={200}
        triggerOffset={90}
        delayInMilliseconds={800}
      >
        <div>
          <CarsList cars={cars} />
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
